package v1

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

type NewPasteReq struct {
	g.Meta   `path:"/paste" tags:"Paste" method:"post" summary:"创建粘贴板"`
	Title    string             `json:"title"`
	Language string             `v:"required" json:"language"`
	Content  string             `v:"required" json:"content"`
	FileList *ghttp.UploadFiles `json:"fileList"`
	ExpDate  string             `v:"required" json:"expDate"`
}
type NewPasteRes struct {
	g.Meta `mime:"text/html" example:"string"`
	Id     string `json:"id"`
}

type PasteReq struct {
	g.Meta `path:"/paste" tags:"Paste" method:"get" summary:"获取粘贴板数据"`
	Id     string `v:"required" json:"id"`
}

type PasteContent struct {
	Title    string   `v:"required" json:"title"`
	Language string   `v:"required" json:"language"`
	Content  string   `v:"required" json:"content"`
	ExpDate  string   `json:"expDate"`
	FileList []string `json:"fileList"`
}
type PasteRes struct {
	g.Meta `mime:"text/html" example:"string"`
	PasteContent
}
