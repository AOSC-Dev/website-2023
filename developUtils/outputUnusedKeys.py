import os
import json
import re
import argparse
from pathlib import Path


def find_vue_files(root_dirs):
    """
    在多个目录树中查找所有.vue文件
    """
    vue_files = []
    for root_dir in root_dirs:
        if not os.path.exists(root_dir):
            print(f"警告: 目录 {root_dir} 不存在，跳过")
            continue

        for root, dirs, files in os.walk(root_dir):
            for file in files:
                if file.endswith('.vue'):
                    vue_files.append(os.path.join(root, file))
    print(vue_files.append('app.vue'))
    return vue_files


def extract_all_keys_from_json(data, parent_key='', separator='.'):
    """
    递归提取JSON中的所有key路径，只处理字典key，不处理数组索引
    """
    keys = []
    if isinstance(data, dict):
        for key, value in data.items():
            new_key = f"{parent_key}{separator}{key}" if parent_key else key
            keys.append(new_key)
            # 只递归处理字典，不处理数组
            if isinstance(value, dict):
                keys.extend(extract_all_keys_from_json(
                    value, new_key, separator))
    return keys


def find_key_in_vue_files(key, vue_files):
    """
    在Vue文件中查找key是否被使用，使用带引号的key进行查找
    """
    found_in_files = []

    # 构建带引号的key
    quoted_key = f"'{key}'"

    # 构建匹配模式：t('key') 或 tm('key')
    patterns = [
        rf"t\s*\(\s*{re.escape(quoted_key)}\s*\)",
        rf"tm\s*\(\s*{re.escape(quoted_key)}\s*\)"
    ]

    for vue_file in vue_files:
        try:
            with open(vue_file, 'r', encoding='utf-8') as f:
                content = f.read()

            for pattern in patterns:
                if re.search(pattern, content):
                    # 找到key的使用，提取上下文
                    match = re.search(pattern, content)
                    if match:
                        # 获取匹配行前后的内容
                        start = max(0, match.start() - 50)
                        end = min(len(content), match.end() + 50)
                        context = content[start:end].replace('\n', ' ')
                        found_in_files.append({
                            'file': vue_file,
                            'context': context,
                            'line': content[:match.start()].count('\n') + 1
                        })
                        break  # 找到一个匹配就跳出内层循环
        except Exception as e:
            print(f"读取文件 {vue_file} 时出错: {e}")

    return found_in_files


def check_unused_keys(root_dirs, locales_path):
    """
    检查locales目录下JSON文件中可能废弃的key
    """
    # 获取所有Vue文件
    vue_files = find_vue_files(root_dirs)
    print(f"在 {len(root_dirs)} 个目录中找到 {len(vue_files)} 个.vue文件")
    
    # 获取所有locales文件
    locale_files = []
    for root, dirs, files in os.walk(locales_path):
        for file in files:
            if file.endswith('.json'):
                locale_files.append(os.path.join(root, file))
    
    print(f"找到 {len(locale_files)} 个locales文件")
    
    # 存储所有未使用的key
    unused_keys = []
    used_keys = []
    
    for locale_file in locale_files:
        if locale_file.find('allUniversalLink') == -1:
            try:
                with open(locale_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                
                # 提取文件名作为基础key
                base_key = os.path.splitext(os.path.basename(locale_file))[0]
                print(f"\n检查文件: {locale_file} (基础key: {base_key})")
                
                # 提取所有key路径
                all_keys = extract_all_keys_from_json(data, base_key)
                print(f"  找到 {len(all_keys)} 个key")
                
                # 按key长度排序，从长到短，这样我们可以先检查深层key
                all_keys.sort(key=lambda x: len(x.split('.')), reverse=True)
                
                # 存储已经检查过的key和它们的使用状态
                key_status = {}
                
                # 第一遍：检查每个key的使用情况
                for key in all_keys:
                    # 获取key对应的值
                    value = get_value_from_json(data, key.split(f"{base_key}.", 1)[1])
                    # 根据值类型决定查找模式
                    if isinstance(value, str):
                        # 字符串值：查找t和tm两种形式
                        patterns = [
                            rf"t\s*\(\s*'{re.escape(key)}'\s*\)",
                            rf"tm\s*\(\s*'{re.escape(key)}'\s*\)"
                        ]
                    else:
                        # 非字符串值：只查找tm形式
                        patterns = [
                            rf"tm\s*\(\s*'{re.escape(key)}'\s*\)"
                        ]
                    
                    found = False
                    for vue_file in vue_files:
                        try:
                            with open(vue_file, 'r', encoding='utf-8') as f:
                                content = f.read()
                            
                            for pattern in patterns:
                                if re.search(pattern, content):
                                    found = True
                                    break
                            if found:
                                break
                        except Exception as e:
                            print(f"读取文件 {vue_file} 时出错: {e}")
                    
                    key_status[key] = {
                        'found': found,
                        'value': value,
                        'type': type(value).__name__
                    }
                    
                    if found:
                        print(f"  ✓  使用的key: {key}")
                    else:
                        print(f"  ⚠️  未使用的key: {key}")
                
                # 第二遍：传播使用状态
                # 按key长度排序，从短到长，这样我们可以先传播浅层key
                all_keys.sort(key=lambda x: len(x.split('.')))
                
                for key in all_keys:
                    if key_status[key]['found']:
                        # 如果key被使用，进行反向传播（标记所有父节点为已使用）
                        key_parts = key.split('.')
                        for i in range(1, len(key_parts)):
                            parent_key = '.'.join(key_parts[:i])
                            if parent_key in key_status and not key_status[parent_key]['found']:
                                key_status[parent_key]['found'] = True
                                print(f"  ←  反向传播: {parent_key} 被标记为已使用（因为 {key} 被使用）")
                        
                        # 如果值是非字符串（对象或数组），进行正向传播（标记所有子节点为已使用）
                        if not isinstance(key_status[key]['value'], str):
                            for other_key in all_keys:
                                if other_key != key and other_key.startswith(key + '.'):
                                    if not key_status[other_key]['found']:
                                        key_status[other_key]['found'] = True
                                        print(f"  →  正向传播: {other_key} 被标记为已使用（因为 {key} 是非字符串对象）")
                
                # 第三遍：收集结果
                for key in all_keys:
                    if not key_status[key]['found']:
                        unused_keys.append({
                            'file': locale_file,
                            'key': key,
                            'value': key_status[key]['value'],
                            'type': key_status[key]['type']
                        })
                    else:
                        used_keys.append({
                            'key': key
                        })
                        
            except Exception as e:
                print(f"处理文件 {locale_file} 时出错: {e}")
    
    return unused_keys, used_keys

def get_value_from_json(data, key_path):
    """
    从JSON数据中获取指定路径的值
    """
    if not key_path:  # 如果是基础key本身
        return data

    keys = key_path.split('.')
    value = data

    for key in keys:
        if isinstance(value, dict) and key in value:
            value = value[key]
        elif isinstance(value, list) and key.isdigit() and int(key) < len(value):
            value = value[int(key)]
        else:
            return None

    return value


def generate_report(unused_keys, used_keys, output_file=None):
    """
    生成检查报告
    """
    report = []
    report.append("=" * 80)
    report.append("locales key使用情况检查报告")
    report.append("=" * 80)
    report.append(f"总共发现 {len(used_keys)} 个使用的key")
    report.append(f"总共发现 {len(unused_keys)} 个可能废弃的key")
    report.append("")

    # 先显示未使用的key
    if unused_keys:
        report.append("可能废弃的key:")
        report.append("-" * 60)

        # 按文件分组
        files_dict = {}
        for item in unused_keys:
            file = item['file']
            if file not in files_dict:
                files_dict[file] = []
            files_dict[file].append(item)

        for file, keys in files_dict.items():
            report.append(f"文件: {file}")
            for item in keys:
                value_preview = str(item['value'])[
                    :100] + "..." if len(str(item['value'])) > 100 else str(item['value'])
                report.append(f"  Key: {item['key']}")
                report.append(f"  类型: {item['type']}")
                report.append(f"  值: {value_preview}")
                report.append("")

    # 再显示使用的key的统计信息
    if used_keys:
        report.append("使用的key统计:")
        report.append("-" * 60)

    report_text = "\n".join(report)

    if output_file:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(report_text)
        print(f"\n报告已保存到: {output_file}")

    return report_text


def parse_root_dirs(root_dirs_str):
    """
    解析根目录字符串，支持逗号或分号分隔
    """
    # 支持逗号和分号分隔
    if ';' in root_dirs_str:
        return [dir.strip() for dir in root_dirs_str.split(';') if dir.strip()]
    else:
        return [dir.strip() for dir in root_dirs_str.split(',') if dir.strip()]


def main():
    parser = argparse.ArgumentParser(description='检查locales目录下可能废弃的key')
    parser.add_argument('root_dirs', help='Vue项目根目录路径，多个目录用逗号或分号分隔')
    parser.add_argument('locales_path', help='locales文件目录路径')
    parser.add_argument('--output', '-o', help='输出报告文件路径')
    parser.add_argument('--verbose', '-v', action='store_true', help='详细输出模式')

    args = parser.parse_args()

    root_dirs = parse_root_dirs(args.root_dirs)
    locales_path = args.locales_path
    output_file = args.output
    verbose = args.verbose

    if not root_dirs:
        print("错误: 未指定有效的根目录")
        return

    if not os.path.exists(locales_path):
        print(f"错误: locales目录 {locales_path} 不存在")
        return

    print(f"开始检查目录: {', '.join(root_dirs)}")
    print(f"使用locales目录: {locales_path}")

    # 执行检查
    unused_keys, used_keys = check_unused_keys(root_dirs, locales_path)

    # 生成报告
    report = generate_report(unused_keys, used_keys, output_file)

    if verbose or not output_file:
        print("\n" + report)

    print(f"\n检查完成! 发现 {len(used_keys)} 个使用的key, {len(unused_keys)} 个可能废弃的key")


if __name__ == "__main__":
    main()
