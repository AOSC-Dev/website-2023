package paste

import (
	"context"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/errors/gcode"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gfile"
	"github.com/google/uuid"

	v1 "pasteServer/api/paste/v1"
)

type PasteContent struct {
	Title    string   `v:"required" json:"title"`
	Language string   `v:"required" json:"language"`
	Content  string   `v:"required" json:"content"`
	FileList []string `json:"fileList"`
	Password string   `json:"password"`
}

func (c *ControllerV1) NewPaste(ctx context.Context, req *v1.NewPasteReq) (res *v1.NewPasteRes, err error) {
	pasteId := uuid.New().String()
	res = &v1.NewPasteRes{Id: pasteId}

	gfile.Mkdir("paste/content/" + pasteId)
	pasteContent := PasteContent{
		Content:  req.Content,
		Language: req.Language,
		Title:    req.Title,
	}

	if req.FileList != nil {
		filenames, e := req.FileList.Save("paste/content/"+pasteId+"/", false)
		if e != nil {
			err = gerror.NewCode(gcode.CodeInternalError, "保存附件文件失败")
			g.Log("保存附件文件失败: ", e.Error())
			return
		}
		pasteContent.FileList = filenames
	}

	if req.Password != "" {
		gfile.PutContents("paste/content/"+pasteId+"/password", req.Password)
	}

	json := gjson.New(pasteContent)
	jsonStr, e := json.ToJsonString()
	if e != nil {
		err = gerror.NewCode(gcode.CodeInternalError, "保存json文件失败")
		g.Log("保存json文件失败: ", e.Error())
		return
	}
	gfile.PutContents("paste/content/"+pasteId+"/content.json", jsonStr)

	// 将删除文件放到删除目录
	gfile.PutContents("paste/remove/"+req.ExpDate+"/"+pasteId, "")

	return
}
