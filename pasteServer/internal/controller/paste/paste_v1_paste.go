package paste

import (
	"context"

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

	passwordPath := pastePath + "/password"
	if gfile.Exists(passwordPath) {
		if req.Password == "" {
			err = gerror.NewCode(gcode.CodeMissingParameter, "需要密码")
			return
		}
		if req.Password != gfile.GetContents(passwordPath) {
			err = gerror.NewCode(gcode.CodeMissingParameter, "密码错误")
			return
		}
	}

	res = &v1.PasteRes{
		Json: gfile.GetContents(pastePath + "/content.json"),
	}

	return
}
