// =================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.
// =================================================================================

package paste

import (
	"context"

	"pasteServer/api/paste/v1"
)

type IPasteV1 interface {
	NewPaste(ctx context.Context, req *v1.NewPasteReq) (res *v1.NewPasteRes, err error)
	Paste(ctx context.Context, req *v1.PasteReq) (res *v1.PasteRes, err error)
}
