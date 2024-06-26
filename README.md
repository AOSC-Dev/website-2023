# AOSC Web Site
> Vue3 + Vite

## 新闻类说明

1. 新闻内容使用 `markdown` 编写
2. 新闻的md文件路径为 `public/news/`
3. 静态文件路径为 `assets/`，引用方式为 `/assets/...`
5. 新闻md文件需要头信息，跟之前的格式一致，头信息里category字段对应关系如下:
    1. news: 用户公告
    2. warning: 安全公告
    3. community: 社区新闻
    4. book: 社区期刊
6. 新闻的md文件名里如需体现语言，如zh-cn,则文件名后缀的前面必须是.zh-cn.md，也就是遵循现有语言的规则，如果忽略语言，则默认为en(英文)，详情可查看[生成新闻目录的代码](makeCategory/main.go)

# todolist
功能实现
    2. 下载页面数据
    3. 粘贴版
    4. 镜像源
