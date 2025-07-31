import fs from 'node:fs';
import path from 'node:path';
import pangu from 'pangu';

const processJson = (data) => {
  let result = Array.isArray(data) ? [] : {};

  if (typeof data === 'string') {
    // 如果是字符串，调用 A 函数并返回结果
    return pangu.spacing(data);
  } else if (Array.isArray(data)) {
    // 如果是数组，递归处理数组中的每个元素
    for (let i = 0; i < data.length; i++) {
      result.push(processJson(data[i]));
    }
    return result;
  } else if (typeof data === 'object' && data !== null) {
    // 如果是对象，递归处理对象的每一个键值对
    for (let key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        result[key] = processJson(data[key]);
      }
    }
    return result;
  } else {
    // 如果是其他类型，直接返回
    return data;
  }
};

// 从 JSON 文件读取数据并处理
const processJsonFile = (inputFilePath, outputFilePath) => {
  // 处理 JSON 数据
  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('读取文件失败:', err);
      return;
    }

    // 解析 JSON 数据
    let jsonData;
    try {
      jsonData = JSON.parse(data);
    } catch (err) {
      console.error('JSON 解析失败:', err);
      return;
    }

    // 处理 JSON 数据
    const processedData = processJson(jsonData);

    // 写回到文件
    fs.writeFile(
      outputFilePath,
      JSON.stringify(processedData, null, 2),
      (err) => {
        if (err) {
          console.error('写入文件失败:', err);
          return;
        }
        console.log('文件处理并成功保存!');
      }
    );
  });
};

const processFilesInDirectory = (directoryPath) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('读取目录失败:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);

      // 获取文件状态
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`获取文件状态失败: ${filePath}`, err);
          return;
        }

        // 如果是目录，则递归调用
        if (stats.isDirectory()) {
          processFilesInDirectory(filePath);
        } else if (stats.isFile() && filePath.endsWith('.json')) {
          // 如果是 JSON 文件，则处理它
          const outputFilePath = filePath.replace('.json', '_processed.json');
          processJsonFile(filePath, outputFilePath);
        }
      });
    });
  });
};
processFilesInDirectory('../locales/zh-cn');
