---
title: "My First Post"
date: 2020-09-03T17:27:59+07:00
---

# AOSC OS？

AOSC OS 是使用 APT 和 dpkg 包管理，基于 Linux 内核和各类组件独立构建和维护的操作系统。AOSC OS 主要面向有一定 Linux 使用经验的用户，针对个人设备优化体验。此外，AOSC OS 致力于开箱即用、简化系统管理和提供可靠的工作环境。

AOSC OS 是众多 Linux 发行版中的一员。因此，在选择 Linux 发行版时，您也许苦于“选择困难症”。此文旨在从多方面介绍 AOSC OS，以助您作出选择。

{{< category-block "设计理念" >}}

![https://aosc.io/assets/i/gallery/anan.png](https://aosc.io/assets/i/gallery/anan.png)

| Original Type | Operation |
|---------------|-----------|
| Normal String | The variable will be splitted using `IFS` and converted to an array |
| Normal Array  | No change |
| Integer       | The variable will be converted to a string and then converted to an array with only one element |
| Associated Array | The variable will be converted to an array containing all the key names of the original associated array |
| Function      | An error will be thrown |


# 设计理念

AOSC OS 的设计基于如下目标和理念：

- 如非必要不切分软件包，即每个应用一个软件包。
- 为不同语言的用户提供良好的开箱体验。
- 对开源和闭源软件一视同仁。
- 重视系统可靠性。
- 在不同架构上提供相近的功能和体验。

# 优缺点

本节介绍 AOSC OS 的优缺点。

## 优点

- 部署快捷，开箱即用。
- 系统管理简单明了。
- 维护者重视技术支持。
- 闭源和商用软件支持良好。
- 多语言支持开箱即用。
- 硬件驱动支持完整。
- 电源管理配置开箱即用。
- 预装针对特定地区的网络连通工具。
- 通过 Wine 提供良好的 Windows 应用支持。
- 各架构体验统一且优化充分。

## 缺点

- 系统比较庞大，相对于其他发行版需要更多存储空间。
- 缺少 multilib 和 multiarch 支持，跨架构开发较为繁琐。
- 软件仓库的规模较小。
- 对第三方商业软件支持有限。
- 维护者人手有限，软件修复和安全更新响应较慢。
- 预装闭源和非自由软件。

```c++
#include "core.h"

FMT_BEGIN_NAMESPACE

namespace detail {

template <typename T> struct is_reference_wrapper : std::false_type {};
template <typename T>
struct is_reference_wrapper<std::reference_wrapper<T>> : std::true_type {};

template <typename T> auto unwrap(const T& v) -> const T& { return v; }
template <typename T>
auto unwrap(const std::reference_wrapper<T>& v) -> const T& {
  return static_cast<const T&>(v);
}
};
```

# 适用场景

本节介绍 AOSC OS 的适用场景。

## 适用本系统的场景

- 个人和家庭用途。
- 硬件条件较为理想：存储充分且互联网连接较为稳定。
- 对部署简易性有追求且偏好开箱即用的系统。
- 对软件更新速度要求较低。
- 笔记本电脑等能耗和散热性能敏感的设备。
- 您希望参与 AOSC OS 开发。

## 不推荐使用本系统的场景

- 无 Linux 使用和管理经验。
- 对系统轻量化或可定制性有要求。
- 对软件更新的响应速度要求较高。
- 商用或有高可靠性需求的环境。
- 公有云或虚拟服务器等存储成本较高的环境。
- 对非自由软件敏感。
