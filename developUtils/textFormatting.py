import os
import json
import sys
import pangu

# 假设 A 是你提供的处理字符串的函数


def A(ss):
    # 这里是你自己的逻辑
    return pangu.spacing_text(ss)  # 过一边盘古

# 递归处理 JSON 数据中的字符串


def process_json(data):
    if isinstance(data, str):
        return A(data)
    elif isinstance(data, list):
        return [process_json(item) for item in data]
    elif isinstance(data, dict):
        return {key: process_json(value) for key, value in data.items()}
    else:
        return data

# 读取和处理 JSON 文件


def process_json_file(file_path, output_file_path):
    try:
        # 读取 JSON 文件
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)

        # 处理 JSON 数据
        processed_data = process_json(data)

        # 写回到文件
        with open(output_file_path, 'w', encoding='utf-8') as file:
            json.dump(processed_data, file, ensure_ascii=False, indent=2)

        print(f'文件处理并成功保存: {output_file_path}')

    except Exception as e:
        print(f'处理文件 {file_path} 时出错: {e}')

# 递归读取目录并处理所有 JSON 文件


def process_files_in_directory(directory_path):
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.endswith('.json'):
                file_path = os.path.join(root, file)
                process_json_file(file_path, file_path)


def main(directory_path='../locales'):
    process_files_in_directory(directory_path)


if __name__ == '__main__':
    if len(sys.argv) > 2:
        print("用法: python script.py <顶层目录 default=../locales> ")
        sys.exit(1)
    if len(sys.argv) > 1:
        main(sys.argv[1])
    else:
        main()
