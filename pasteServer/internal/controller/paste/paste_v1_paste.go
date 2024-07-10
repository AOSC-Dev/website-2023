package paste

import (
	"context"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/errors/gcode"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/os/gfile"

	v1 "pasteServer/api/paste/v1"
)

func (c *ControllerV1) Paste(ctx context.Context, req *v1.PasteReq) (res *v1.PasteRes, err error) {
	if req.Id == "" {
		err = gerror.NewCode(gcode.CodeMissingParameter, "请传id")
		return
	}

	pastePath := "paste/content/" + req.Id
	if !gfile.Exists(pastePath) {
		err = gerror.NewCode(gcode.CodeInvalidParameter, "粘贴板不存在")
		return
	}

	res = &v1.PasteRes{}
	jsonObj, e := gjson.DecodeToJson(gfile.GetContents(pastePath + "/content.json"))
	if e != nil {
		err = gerror.NewCode(gcode.CodeInternalError, "服务器解析json失败: "+e.Error())
		return
	}

	jsonObj.Scan(res)

	return
}
