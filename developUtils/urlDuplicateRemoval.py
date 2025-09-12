import json
import os
import sys

def find_and_deduplicate_urls(obj):
    url_values = []  # 存储所有URL值
    duplicates = set()  # 存储重复的URL

    # 递归遍历函数
    def traverse(curr):
        if isinstance(curr, dict):
            for key, value in curr.items():
                if key == 'url' and isinstance(value, str):
                    if value in url_values:
                        duplicates.add(value)
                    else:
                        url_values.append(value)
                else:
                    traverse(value)
        elif isinstance(curr, list):
            for item in curr:
                traverse(item)

    # 开始递归遍历
    traverse(obj)

    # 输出重复的URL
    for url in duplicates:
        print(f'{url}')

def main(top_directory='../locales'):
    if not os.path.isdir(top_directory):
        print(f"错误: 顶层目录 '{top_directory}' 不存在")
        sys.exit(1)
        
    subdirs = []
    for item in os.listdir(top_directory):
        item_path = os.path.join(top_directory, item)
        if os.path.isdir(item_path):
            subdirs.append((item, item_path))
        elif item.endswith('.js'):
            continue
        else:
            print(f"警告: 忽略非目录非js文件: {item}")
            
    if not subdirs:
        print("错误: 没有找到次顶层目录")
        sys.exit(1)

    print(f"找到 {len(subdirs)} 个次顶层目录: {[name for name, path in subdirs]}")
    
    for name, path in subdirs:
        with open(f'{path}/json/allUniversalLink.json', 'r', encoding='utf-8')as f:
            ref_json = json.load(f)
        print(f'检测{path}/json/allUniversalLink.json')
        find_and_deduplicate_urls(ref_json)

if __name__ == '__main__':
    if len(sys.argv) > 2:
        print("用法: python script.py <顶层目录 default=../locales> ")
        sys.exit(1)
    if len(sys.argv) >1:
        main(sys.argv[1])
    else:
        main()