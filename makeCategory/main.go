package main

import (
	"encoding/json"
	"fmt"
	"log"
	_ "makeCategory/internal/packed"
	"os"
	"strings"
	"time"

	"github.com/gogf/gf/v2/container/gset"
	"github.com/gogf/gf/v2/encoding/gyaml"
	"github.com/gogf/gf/v2/os/gfile"
)

type NewsItem struct {
	Path      string
	Title     string
	Date      string
	Important bool
}

func (n NewsItem) MarshalJSON() ([]byte, error) {
	type Alias NewsItem
	return json.Marshal(&struct {
		*Alias
	}{
		Alias: (*Alias)(&n),
	})
}

// 当前语言集合
var languageSet gset.Set = *gset.New()

func main() {
	languageSet.Add("zh-cn")

	newsDir := "./news"
	newsList, err := os.ReadDir(newsDir)
	// 需要对newsList进行倒序排序，时间最大的最靠前
	if err != nil {
		log.Fatalln("读取新闻文件夹出错: " + err.Error())
		return
	}

	var newsFileList []string
	for i := len(newsList) - 1; i >= 0; i-- {
		newsFileList = append(newsFileList, newsList[i].Name())
	}

	languageNewsMap := make(map[string]map[string][]NewsItem)

	for _, newsFile := range newsFileList {
		// 根据文件名判断语言,默认是en英语
		language := fromFileNameGetLanguage(newsFile)

		// 如果没有对应语言的map,则先新建
		if languageNewsMap[language] == nil {
			languageNewsMap[language] = make(map[string][]NewsItem, 0)
		}
		newsMap := languageNewsMap[language]
		// 读取文件头信息
		newsContent := gfile.GetContents(newsDir + "/" + newsFile)
		categoryContent := newsContent[4:]
		index2 := strings.Index(categoryContent, "---")
		if index2 < 0 {
			fmt.Println("没有头信息: " + newsFile)
			continue
		}
		categoryContent = categoryContent[:index2]
		categoryYaml, err := gyaml.Decode([]byte(categoryContent))
		if err != nil {
			log.Fatalln("解析yaml格式出粗: " + err.Error() + " - " + newsFile)
			continue
		}

		categories := categoryYaml["categories"].([]interface{})
		// fmt.Println("新闻标题: " + categoryYaml["title"].(string))
		for _, category := range categories {
			categoryStr := category.(string)
			if newsMap[categoryStr] == nil {
				newsMap[categoryStr] = []NewsItem{}
			}

			dateInterface := categoryYaml["date"]
			dateStr := ""
			switch dateInterface.(type) {
			case time.Time:
				dateTime := dateInterface.(time.Time)
				dateStr = dateTime.Format("2006-01-02")
			case string:
				dateStr = dateInterface.(string)
			}

			newsMap[categoryStr] = append(newsMap[categoryStr], NewsItem{Title: categoryYaml["title"].(string), Path: newsFile, Important: categoryYaml["important"].(bool), Date: dateStr})
		}
	}

	categoriesPath := "./newsCategories/"
	// 遍历language,生成对应的json文件
	for language, newsMapItems := range languageNewsMap {
		// 首先将每个语言里面最新的10条新闻生成对应的jaon
		newNewsMap := make(map[string][]NewsItem, 0)
		// 遍历对应language的category,生成对应的json
		for category, newsItems := range newsMapItems {
			fmt.Println("category: " + category)
			jsonByteArr, _ := json.Marshal(newsItems)
			gfile.PutContents(categoriesPath+category+"."+language+".json", string(jsonByteArr))

			// 挑选出最新10条
			if newNewsMap[category] == nil {
				newLen := 10
				if len(newsItems) < 10 {
					newLen = len(newsItems)
				}
				newNewsMap[category] = newsItems[:newLen]
				jsonByteArr, _ := json.Marshal(newNewsMap)
				gfile.PutContents(categoriesPath+language+".json", string(jsonByteArr))
			}
		}

	}
}

func fromFileNameGetLanguage(fileName string) string {
	language := "en"
	fileNameArr := strings.Split(fileName, ".")
	fileNameLen := len(fileNameArr)
	if fileNameLen > 2 && languageSet.Contains(fileNameArr[fileNameLen-2]) {
		language = fileNameArr[fileNameLen-2]
	}
	return language
}
