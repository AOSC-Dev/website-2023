import urlList from '../locales/zh-cn/json/allUniversalLink.json' with { type: 'json' };
import fs from 'node:fs';
// 读取 JSON 文件
const jsonData = urlList;

// 用正则表达式匹配中文字符
// const chineseRegex = /[\u4e00-\u9fa5]/;

// 用来存储符合条件的中文字符串
// let result = [];

// 递归函数，遍历嵌套结构
// const extractChineseNodes = (node) => {
//   if (typeof node === 'string') {
//     // 如果是字符串，检查是否包含中文
//     if (chineseRegex.test(node)) {
//       result.push(node);
//     }
//   } else if (Array.isArray(node)) {
//     // 如果是数组，递归检查每个元素
//     node.forEach((item) => extractChineseNodes(item));
//   } else if (typeof node === 'object' && node !== null) {
//     // 如果是对象，递归遍历所有值
//     Object.values(node).forEach((value) => extractChineseNodes(value));
//   }
// };
const chineseToEnglish = (jsonObj, englishList) => {
  // 如果是数组，遍历数组中的每个元素
  if (Array.isArray(jsonObj)) {
    return jsonObj.map((item) => chineseToEnglish(item, englishList));
  }

  // 如果是对象，递归遍历其每个键值对
  if (typeof jsonObj === 'object' && jsonObj !== null) {
    for (let key in jsonObj) {
      // 递归处理每个值
      jsonObj[key] = chineseToEnglish(jsonObj[key], englishList);
    }
  }

  // 如果是字符串且包含中文，替换为 englishList 中的一个值
  else if (typeof jsonObj === 'string') {
    // 判断字符串中是否包含中文字符
    if (/[\u4e00-\u9fa5]/.test(jsonObj)) {
      // 从 englishList 中取出一个元素替换
      if (englishList.length > 0) {
        return englishList.shift();
      }
    }
  }
  return jsonObj;
};

// main1 用来提取 json 中文件包含中文的根节点，修改输入源请更改顶层 import
// 用法：先用 main1 读取你要替换的 json 文件，拿到一个中文 string 数组，丢
// 给翻译，然后去 main2 替换原来的文件并输出新文件，完成一个多语言翻译
// const main1 = () => {
//   // 调用递归函数，提取中文根节点
//   extractChineseNodes(jsonData);
//   fs.writeFileSync(
//     './extractChineseNodes-result.json',
//     JSON.stringify(result, null, 2),
//     'utf-8'
//   );
// };

const sss = [
  'Web Source Code',
  'Report Content Issues',
  'Crowdfunding Project Records',
  'Report Security Vulnerabilities',
  'Mirror Source Support',
  'Join Group',
  'Join Group',
  'Join Group',
  'Join Chat Room',
  'Join Channel',
  'Join Channel',
  'Join Channel',
  'Join Chat Room',
  'Join Chat Room',
  'Join Chat Room',
  'System Download',
  'Download oma',
  'Antong OS Architecture Support Specification',
  'Release Notes',
  'Release Notes',
  'Configuration Requirements',
  'Release Notes',
  'Configuration Requirements',
  'System Configuration Requirements',
  'Antong OS System Requirements Specification',
  'Configuration Requirements',
  'Is Antong OS Right for Me?',
  'Release Notes',
  'System Configuration Requirements',
  'Architecture Support Specification',
  'Xingxia OS System Requirements Specification',
  'Xingxia OS Architecture Support Specification',
  'About the Community',
  'Various Chat Groups',
  'Contact Information',
  'Report System Usage Issues',
  'Community Portal',
  'Return to Homepage',
  'Antong OS',
  'Xingxia OS',
  'libLoL Compatibility Layer',
  'Panda Package Management (oma)',
  'Detailed Introduction',
  'Software Localization',
  'News and Information',
  'Event Album',
  'Community Events',
  'Check Recent Event Information',
  'AOSCC: Community Annual Gathering',
  'Antong Campus Tour',
  'Spring Festival Pancake Party',
  'Other Events',
  'Internship Resources',
  'Check Recent Internship Opportunities and To-Do Projects',
  'Hero Post: To-Do Projects',
  'Internship Project: Open Source Summer',
  'Sponsor Overview',
  'Community Crowdfunding',
  'Sponsor Hardware or Services',
  'Interpersonal Guidelines',
  'Interpersonal Guidelines',
  'Community Mascot',
  'Public Clipboard',
  'Use Public Clipboard',
  'Contributor Email',
  'Build Server',
  'Automation Facilities',
  'Community Forum',
  'QQ Sticker Pack',
  'Telegram Sticker Pack',
  'Sticker Pack Materials',
  'Draft Designs',
  'Code Repository',
  'Panda Package Management (oma)',
  'Source Code',
  'Apernet Internet Laboratory',
  'Loongson Zhongke (Wuhan) Technology Co., Ltd.',
  'Beijing Foreign Studies University Open Source Software Mirror Site',
  'University of Electronic Science and Technology Linux User Group',
  'Harbin Institute of Technology Linux Open Source Student Club',
  'Dutch Local Unix User Group (NLUUG)',
  'Jilin University Linux User Association',
  'Lanzhou University Open Source Community (LZUOSS)',
  'Nanjing University e-Science Center',
  'Nanyang Institute of Technology Computer and Information Processing Association',
  'Tsinghua University TUNA Association',
  'Shandong University (Qingdao) Network Management Team Mirror Site Student Operations Team',
  'Shanghai Jiao Tong University Linux User Group',
  'Shanghai University of Science and Technology Geekpie Association',
  'Tencent Cloud',
  'University of Science and Technology of China Linux User Group (LUG@USTC)',
  'Banana Pi Community',
  'PLCT Laboratory',
  'QingCloud',
  'Chongqing University Blue League',
  'Chongqing University of Posts and Telecommunications Linux User Group',
  'Shanghai University Open Source Community',
  'Capital Online',
  'AOSC Wiki',
  'Reference Documents',
  'GitHub Organization',
  'Code Repository',
  'AOSC Chin Rest Group and Hospitality Point',
  'AOSCC Sticker Pack',
  'Contributor Covenant',
  'Support Documents',
  'System Features',
  'Community Weblate Platform',
  'Mainland Simplified Chinese Free Software Localization Work Guide',
  'Version 1.5.4',
  'Compatibility Database',
  'Application Compatibility Database',
  'Project Homepage',
  'Installation Guide',
  "About 'New World' and 'Old World'",
  'Frequently Asked Questions',
  'Changelog',
  'Packaging Notes',
  'Implementation Principles'
];

// mian2 用来替换一个json 文件中每一个包含中文的根节点，其输入 sss
// 应该为 main1 的输出，输入jsonData应该是你要替换的json文件。
const main2 = () => {
  chineseToEnglish(jsonData, sss);
  fs.writeFileSync(
    './chineseToEnglish.json',
    JSON.stringify(jsonData, null, 2),
    'utf-8'
  );
};

main2();
