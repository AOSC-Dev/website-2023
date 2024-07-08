package main

import (
	_ "pasteServer/internal/packed"

	"github.com/gogf/gf/v2/os/gctx"

	"pasteServer/internal/cmd"
)

func main() {
	cmd.Main.Run(gctx.GetInitCtx())
}
