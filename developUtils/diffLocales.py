import os
import json
import sys
from typing import Any, Dict, List, Set, Tuple, Union

def get_structure(directory: str) -> Dict[str, Dict[str, List[str]]]:
    """获取目录结构，包括所有子目录和文件"""
    structure = {}
    for root, dirs, files in os.walk(directory):
        rel_path = os.path.relpath(root, directory)
        if rel_path == '.':
            rel_path = ''
        structure[rel_path] = {
            'dirs': sorted(dirs),
            'files': sorted(files)
        }
    return structure

def compare_structures(struct1: Dict, struct2: Dict, dir1_name: str, dir2_name: str) -> List[str]:
    """比较两个目录结构，返回差异信息"""
    errors = []
    all_keys = set(struct1.keys()) | set(struct2.keys())
    
    for key in all_keys:
        if key not in struct1:
            errors.append(f"路径 '{key}' 存在于 {dir2_name} 但不存在于 {dir1_name}")
            continue
        if key not in struct2:
            errors.append(f"路径 '{key}' 存在于 {dir1_name} 但不存在于 {dir2_name}")
            continue
            
        # 比较目录
        dirs1 = set(struct1[key]['dirs'])
        dirs2 = set(struct2[key]['dirs'])
        if dirs1 != dirs2:
            missing_dirs = dirs1 - dirs2
            extra_dirs = dirs2 - dirs1
            if missing_dirs:
                errors.append(f"在路径 '{key}' 中，{dir2_name} 缺少目录: {sorted(missing_dirs)}")
            if extra_dirs:
                errors.append(f"在路径 '{key}' 中，{dir2_name} 多出目录: {sorted(extra_dirs)}")
                
        # 比较文件
        files1 = set(struct1[key]['files'])
        files2 = set(struct2[key]['files'])
        if files1 != files2:
            missing_files = files1 - files2
            extra_files = files2 - files1
            if missing_files:
                errors.append(f"在路径 '{key}' 中，{dir2_name} 缺少文件: {sorted(missing_files)}")
            if extra_files:
                errors.append(f"在路径 '{key}' 中，{dir2_name} 多出文件: {sorted(extra_files)}")
    
    return errors

def get_value_type(value: Any) -> str:
    """获取值的类型字符串表示"""
    if isinstance(value, dict):
        return "object"
    elif isinstance(value, list):
        return f"array[{len(value)}]"
    elif isinstance(value, str):
        return "string"
    elif isinstance(value, (int, float)):
        return "number"
    elif isinstance(value, bool):
        return "boolean"
    elif value is None:
        return "null"
    else:
        return f"unknown({type(value).__name__})"

def compare_json_structures(data1: Any, data2: Any, path) -> List[str]:
    """
    比较两个JSON数据的结构
    返回错误信息列表，空列表表示结构一致
    """
    errors = []
    
    # 获取类型
    type1 = get_value_type(data1)
    type2 = get_value_type(data2)
    
    # 检查类型是否匹配
    if type1 != type2:
        errors.append(f"在路径 '{path}' 处类型不匹配: {type1} vs {type2}")
        return errors
    
    # 根据类型进行进一步比较
    if isinstance(data1, dict) and isinstance(data2, dict):
        # 比较对象的键
        keys1 = set(data1.keys())
        keys2 = set(data2.keys())
        
        missing_keys = keys1 - keys2
        extra_keys = keys2 - keys1
        
        if missing_keys:
            errors.append(f"在路径 '{path}' 处缺少键: {sorted(missing_keys)}")
        if extra_keys:
            errors.append(f"在路径 '{path}' 处多出键: {sorted(extra_keys)}")
        
        # 递归比较共有的键
        common_keys = keys1 & keys2
        for key in common_keys:
            new_path = f"{path}.{key}" if path else key
            errors.extend(compare_json_structures(data1[key], data2[key], new_path))
    
    elif isinstance(data1, list) and isinstance(data2, list):
        # 检查数组长度
        if len(data1) != len(data2):
            errors.append(f"在路径 '{path}' 处数组长度不匹配: {len(data1)} vs {len(data2)}")
        
        # 比较数组中的每个元素
        min_len = min(len(data1), len(data2))
        for i in range(min_len):
            new_path = f"{path}[{i}]"
            errors.extend(compare_json_structures(data1[i], data2[i], new_path ))
    
    # 对于基本类型（字符串、数字、布尔值、null），类型匹配就足够了
    
    return errors

def main(top_directory: str):
    """主函数"""
    if not os.path.isdir(top_directory):
        print(f"错误: 顶层目录 '{top_directory}' 不存在")
        sys.exit(1)

    # 收集次顶层目录
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

    # 检查目录结构一致性
    ref_name, ref_path = subdirs[0]
    ref_structure = get_structure(ref_path)
    print(f'基于{ref_path} 对比')
    
    for name, path in subdirs[1:]:
        current_structure = get_structure(path)
        errors = compare_structures(ref_structure, current_structure, ref_name, name)
        
        if errors:
            print(f"错误: 目录结构不一致 between  {name}:")
            for error in errors:
                print(f"  {error}")
            sys.exit(1)

    print("所有次顶层目录结构一致")

    # 收集所有JSON文件的相对路径
    json_files = {}
    for root, dirs, files in os.walk(ref_path):
        rel_root = os.path.relpath(root, ref_path)
        if rel_root == '.':
            rel_root = ''
        for file in files:
            if file.endswith('.json'):
                rel_path = os.path.join(rel_root, file) if rel_root else file
                json_files[rel_path] = None

    # 提取参考目录中所有JSON文件的数据
    ref_data_map = {}
    not_error=True
    for rel_path in json_files:
        json_path = os.path.join(ref_path, rel_path)
        try:
            with open(json_path, 'r', encoding='utf-8') as f:
                ref_data = json.load(f)
            ref_data_map[rel_path] = ref_data
        except Exception as e:
            print(f"错误: 读取参考JSON文件 {json_path} 时出错: {e}")
            sys.exit(1)

    # 比较所有次顶层目录中的JSON文件结构
    for name, path in subdirs[1:]:
        for rel_path, ref_data in ref_data_map.items():
            json_path = os.path.join(path, rel_path)
            if not os.path.exists(json_path):
                print(f"错误: JSON文件 {json_path} 不存在")
                sys.exit(1)
                
            try:
                with open(json_path, 'r', encoding='utf-8') as f:
                    current_data = json.load(f)
                
                errors = compare_json_structures(ref_data, current_data, rel_path)
                
                if errors:
                    print(f"错误!文件结构不一致: {path}/{rel_path}")
                    for error in errors:
                        print(f"  {error}")
                    not_error=False
                    
            except Exception as e:
                print(f"错误: 读取JSON文件 {json_path} 时出错: {e}")
                sys.exit(1)
    if not_error:
        print("所有JSON文件结构一致")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("用法: python script.py <顶层目录>")
        sys.exit(1)
    main(sys.argv[1])