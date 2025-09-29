import os
import re
import argparse
from pathlib import Path
import json

# 此脚本没有做多参数处理，处理 pages/ components/ 需要运行两次！


def process_vue_file(file_path, locales_path):
    """
    处理单个.vue文件，替换textValue的用法并删除tm定义
    根据locales文件中的值类型决定使用t还是tm函数
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 备份原内容
        original_content = content

        # 匹配 const textValue = tm('xxxxxx');
        tm_pattern = r'const\s+(\w+)\s*=\s*tm\([\'"]([^\'"]+)[\'"]\)\s*;'
        matches = list(re.finditer(tm_pattern, content))

        if not matches:
            print(f"未找到tm定义: {file_path}")
            return False

        modified = False

        for match in matches:
            var_name = match.group(1)  # 变量名，如textValue
            if var_name == 'textValue':
                tm_key = match.group(2)    # tm的key，如xxxxxx
                print(f"在 {file_path} 中找到: const {var_name} = tm('{tm_key}')")

                # 构建locales文件路径
                cache = tm_key.split('.')
                locale_file_name = cache.pop(0)
                locale_file_path = os.path.join(
                    locales_path, f"{locale_file_name}.json")

                # 读取locales文件
                locale_data = {}
                if os.path.exists(locale_file_path):
                    try:
                        with open(locale_file_path, 'r', encoding='utf-8') as f:
                            locale_data = json.load(f)
                        print(f"  已加载locales文件: {locale_file_path}")
                    except Exception as e:
                        print(f"  读取locales文件失败: {e}")
                        # 如果读取失败，默认使用t函数
                        locale_data = {}
                else:
                    exit(f'错误！locales文件不存在: {locale_file_path}')
                    # 如果文件不存在，默认使用t函数

                # 构建替换模式：匹配 var_name.xxx.xxx... 的用法
                usage_pattern = r'\b' + \
                    re.escape(
                        var_name) + r'\.([a-zA-Z_$][a-zA-Z0-9_$]*(?:\.[a-zA-Z_$][a-zA-Z0-9_$]*)*)\b'

                def replacement(match_obj):
                    property_chain = match_obj.group(
                        1)  # 获取属性链，如 yyyy 或 yyyy.zzzz

                    # 在locale_data中查找对应的值
                    value = locale_data
                    keys = cache+property_chain.split('.')

                    # 遍历属性链获取最终值
                    for key in keys:
                        if isinstance(value, dict) and key in value:
                            value = value[key]
                        else:
                            # 如果找不到对应的key，报错退出
                            exit(
                                f'错误！未定义的key。{file_path} -> {match_obj.group(0)}')
                            value = None
                            break
                    # 根据值类型决定使用t还是tm函数
                    if isinstance(value, str):
                        new_expression = f"t('{tm_key}.{property_chain}')"
                        func_type = "t"
                    else:
                        new_expression = f"tm('{tm_key}.{property_chain}')"
                        func_type = "tm"

                    print(
                        f"  替换: {match_obj.group(0)} -> {new_expression} (类型: {type(value).__name__}, 函数: {func_type})")
                    return new_expression

                # 执行替换
                new_content, count = re.subn(
                    usage_pattern, replacement, content)
                if count > 0:
                    content = new_content
                    modified = True
                    print(f"  共替换了 {count} 处")

                # # 删除tm定义行
                # # 获取匹配的整行内容
                # line_start = content.rfind('\n', 0, match.start()) + 1
                # line_end = content.find('\n', match.end())
                # if line_end == -1:
                #     line_end = len(content)

                # tm_line = content[line_start:line_end].strip()

                # # 检查这一行是否只有tm定义（可能后面有注释）
                # if re.match(r'^const\s+' + re.escape(var_name) + r'\s*=\s*tm\([^)]+\)\s*;?\s*(?://.*|/\*.*\*/)?\s*$', tm_line):
                #     # 删除整行
                #     content = content[:line_start] + content[line_end:]
                #     if content[line_start:line_start+1] == '\n':
                #         # 如果删除后留下空行，也删除空行
                #         content = content[:line_start] + content[line_start+1:]
                #     print(f"  已删除tm定义: {tm_line}")
                #     modified = True
                # else:
                #     # 只删除匹配的部分
                #     content = content[:match.start()] + content[match.end():]
                #     print(f"  已删除tm定义部分: {match.group(0)}")
                #     modified = True

        if modified:
            # 写入文件
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"成功处理: {file_path}")
            return True
        else:
            print(f"无需修改: {file_path}")
            return False

    except Exception as e:
        print(f"处理文件 {file_path} 时出错: {e}")
        return False


def process_vue_file_not_tm(file_path, locales_path):
    """
    处理单个.vue文件，替换textValue的用法并删除tm定义
    根据locales文件中的值类型决定使用t还是tm函数
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 备份原内容
        original_content = content

        # 匹配 const textValue = tm('xxxxxx');
        tm_pattern = r'const\s+(\w+)\s*=\s*tm\([\'"]([^\'"]+)[\'"]\)\s*;'
        matches = list(re.finditer(tm_pattern, content))

        if not matches:
            print(f"未找到tm定义: {file_path}")
            return False

        modified = False

        for match in matches:
            var_name = match.group(1)  # 变量名，如textValue
            if var_name == 'textValue':
                tm_key = match.group(2)    # tm的key，如xxxxxx
                print(f"在 {file_path} 中找到: const {var_name} = tm('{tm_key}')")

                # 构建locales文件路径
                cache = tm_key.split('.')
                locale_file_name = cache.pop(0)
                locale_file_path = os.path.join(
                    locales_path, f"{locale_file_name}.json")

                # 读取locales文件
                locale_data = {}
                if os.path.exists(locale_file_path):
                    try:
                        with open(locale_file_path, 'r', encoding='utf-8') as f:
                            locale_data = json.load(f)
                        print(f"  已加载locales文件: {locale_file_path}")
                    except Exception as e:
                        print(f"  读取locales文件失败: {e}")
                        # 如果读取失败，默认使用t函数
                        locale_data = {}
                else:
                    exit(f'错误！locales文件不存在: {locale_file_path}')
                    # 如果文件不存在，默认使用t函数

                # 构建替换模式：匹配 var_name.xxx.xxx... 的用法
                usage_pattern = r'\b' + \
                    re.escape(
                        var_name) + r'\.([a-zA-Z_$][a-zA-Z0-9_$]*(?:\.[a-zA-Z_$][a-zA-Z0-9_$]*)*)\b'

                def replacement(match_obj):
                    property_chain = match_obj.group(
                        1)  # 获取属性链，如 yyyy 或 yyyy.zzzz

                    # 在locale_data中查找对应的值
                    value = locale_data
                    keys = cache+property_chain.split('.')
                    # 遍历属性链获取最终值
                    for key in keys:
                        if isinstance(value, dict) and key in value:
                            value = value[key]
                        else:
                            # 如果找不到对应的key，报错退出
                            exit(
                                f'错误！未定义的key。{file_path} -> {match_obj.group(0)}')
                            value = None
                            break
                    # 根据值类型决定使用t还是tm函数
                    if isinstance(value, str):
                        # 只有值是字符串时才替换为t函数
                        new_expression = f"t('{tm_key}.{property_chain}')"
                        func_type = "t"
                        print(
                            f"  替换: {match_obj.group(0)} -> {new_expression} (类型: {type(value).__name__}, 函数: {func_type})")
                        return new_expression
                    else:
                        # 非字符串值，保留原样不替换
                        print(
                            f"  保留: {match_obj.group(0)} (类型: {type(value).__name__}, 不替换)")
                        return match_obj.group(0)  # 返回原始匹配内容，即不进行替换

                # 执行替换
                new_content, count = re.subn(
                    usage_pattern, replacement, content)
                if count > 0:
                    modified = True
                    print(f"  共匹配了 {count} 处")

                # # 删除tm定义行
                # # 获取匹配的整行内容
                # line_start = content.rfind('\n', 0, match.start()) + 1
                # line_end = content.find('\n', match.end())
                # if line_end == -1:
                #     line_end = len(content)

                # tm_line = content[line_start:line_end].strip()

                # # 检查这一行是否只有tm定义（可能后面有注释）
                # if re.match(r'^const\s+' + re.escape(var_name) + r'\s*=\s*tm\([^)]+\)\s*;?\s*(?://.*|/\*.*\*/)?\s*$', tm_line):
                #     # 删除整行
                #     content = content[:line_start] + content[line_end:]
                #     if content[line_start:line_start+1] == '\n':
                #         # 如果删除后留下空行，也删除空行
                #         content = content[:line_start] + content[line_start+1:]
                #     print(f"  已删除tm定义: {tm_line}")
                #     modified = True
                # else:
                #     # 只删除匹配的部分
                #     content = content[:match.start()] + content[match.end():]
                #     print(f"  已删除tm定义部分: {match.group(0)}")
                #     modified = True

        if modified:
            # 写入文件
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"成功处理: {file_path}")
            return True
        else:
            print(f"无需修改: {file_path}")
            return False

    except Exception as e:
        print(f"处理文件 {file_path} 时出错: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(description='处理.vue文件中的textValue用法')
    parser.add_argument('--modifyTm', '-m', action='store_true',
                        default=False, help='将数组和对象修改成tm')
    parser.add_argument('root_dir', help='顶层目录路径')
    parser.add_argument('locales_path', help='locales文件目录路径')

    args = parser.parse_args()
    modify_tm = args.modifyTm
    root_dir = args.root_dir
    locales_path = args.locales_path

    if not os.path.exists(root_dir):
        print(f"错误: 目录 {root_dir} 不存在")
        return

    if not os.path.exists(locales_path):
        print(f"错误: locales目录 {locales_path} 不存在")
        return

    print(f"开始处理目录: {root_dir}")
    print(f"使用locales目录: {locales_path}")

    vue_files = find_vue_files(root_dir)
    print(f"找到 {len(vue_files)} 个.vue文件")

    processed_count = 0
    modified_count = 0

    for vue_file in vue_files:
        processed_count += 1
        print(f"\n[{processed_count}/{len(vue_files)}] 处理文件: {vue_file}")

        process_cache = False
        if modify_tm:
            process_cache = process_vue_file(vue_file, locales_path)
        else:
            process_cache = process_vue_file_not_tm(vue_file, locales_path)
        if process_cache:
            modified_count += 1

    print(f"\n处理完成!")
    print(f"总共处理了 {processed_count} 个文件")


def find_vue_files(root_dir):
    """
    在目录树中查找所有.vue文件
    """
    vue_files = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.vue'):
                vue_files.append(os.path.join(root, file))
    return vue_files


if __name__ == "__main__":
    main()
