import urlList from '../locales/json/zh-cnallUniversalLink.json' with { type: 'json' };

// 这个工具用来查找 allUniversalLink.json 里重复的 url

function findAndDeduplicateUrls(obj) {
  let urlValues = []; // 用来存储所有url的值
  let duplicates = new Set(); // 用来存储重复的url

  // 遍历对象的所有属性
  const traverse = (curr) => {
    for (let key in curr) {
      if (Object.prototype.hasOwnProperty.call(curr, key)) {
        // 如果key是url，收集url的值
        if (key === 'url' && typeof curr[key] === 'string') {
          if (urlValues.includes(curr[key])) {
            // 如果已经存在这个url值，标记为重复
            duplicates.add(curr[key]);
          } else {
            urlValues.push(curr[key]);
          }
        } else if (typeof curr[key] === 'object' && curr[key] !== null) {
          // 如果是嵌套对象，继续递归
          traverse(curr[key]);
        }
      }
    }
  };

  // 开始递归遍历
  traverse(obj);

  // 输出重复的url值
  duplicates.forEach((url) => {
    console.log(url);
  });
}

// 执行函数
findAndDeduplicateUrls(urlList);
