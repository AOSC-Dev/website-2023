import axios from 'axios';

export function getImgUrl(url) {
  return new URL(`${url}`, import.meta.url).href;
}

export function toOutUrl(url) {
  window.open(url);
}

export const title = '安同开源社区 (AOSC)';

export function setTitle(titlePre) {
  document.title = titlePre + ' | ' + title;
}

export const requestGetJson = (() => {
  let keys = {};
  let promise = {};
  return (url, params, key) => {
    if (!key) {
      key = url;
    }
    if (!keys[key]) {
      keys[key] = true;
      promise[key] = axios({
        url,
        method: 'get',
        params,
        timeout: 10000
      })
        .then((resolve) => {
          return [resolve, null];
        })
        .catch((error) => {
          switch (error.status) {
            case 500:
              ElMessage.error('服务器内部错误');
              break;
          }
          return [null, error];
        })
        .finally(() => {
          keys[key] = false;
        });
      return promise[key];
    } else {
      return promise[key];
    }
  };
})();

export const requestPostJson = (() => {
  let keys = {};
  let promise = {};
  return (url, data, params, key) => {
    if (!key) {
      key = url;
    }
    if (!keys[key]) {
      keys[key] = true;
      promise[key] = axios({
        url,
        method: 'post',
        data,
        params,
        timeout: 5000
      })
        .then((resolve) => {
          return [resolve, null];
        })
        .catch((error) => {
          switch (error.status) {
            case 500:
              ElMessage.error('服务器内部错误');
          }
          return [null, error];
        })
        .finally(() => {
          keys[key] = false;
        });
      return promise[key];
    } else {
      return promise[key];
    }
  };
})();

export const setBackgroundColor = (color) => {
  return 'bg-[' + color + ']';
};

export const BToMB = (byteSize, fixed = 3) => {
  return (byteSize / 1024 / 1024).toFixed(fixed);
};

export const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      ElMessage.success('复制成功');
    })
    .catch((err) => {
      ElMessage.success(`复制失败:${err}`);
    });
};

export const setNestedKeyValue = (objects, strings, keyPath) => {
  // 确保对象数组和字符串数组的长度相同
  if (objects.length !== strings.length) {
    console.error('对象数组和字符串数组长度不匹配');
    return;
  }

  // 将 keyPath 转换为数组形式（如果传的是字符串）
  if (typeof keyPath === 'string') {
    keyPath = keyPath.split('.');
  }

  // 遍历对象数组，按指定的路径添加或修改值
  objects.forEach((obj, index) => {
    // 使用递归设置嵌套的键值
    setValueByPath(obj, keyPath, strings[index]);
  });

  return objects;
};

const setValueByPath = (obj, path, value) => {
  // 遍历路径中的每一层，逐层创建
  path.reduce((acc, key, i) => {
    if (i === path.length - 1) {
      acc[key] = value; // 设置最终的键值
    } else {
      // 如果对象的键不存在，则创建该键并赋值为对象
      if (!acc[key]) {
        acc[key] = {};
      }
    }
    return acc[key];
  }, obj);
};

export const getSpecifiedTitle = (linkItem) => {
  if (Array.isArray(linkItem.title))
    return linkItem.title[linkItem.tIndex ? linkItem.tIndex : 0];
  else return linkItem.title;
};

// title index
export const useTIndex = (linkItem, tIndex) => {
  return { ...linkItem, tIndex };
};

// hash index
export const useHIndex = (linkItem, hIndex) => {
  return { ...linkItem, hIndex };
};

export const useHighlightWatch = (switchHash) => {
  const highBrightnessControllerStore = useHighBrightnessControllerStore();
  const route = useRoute();
  watch(
    () => highBrightnessControllerStore.obj[route.path.replace(/\/+$/, '')],
    () => {
      switchHash();
    },
    {
      flush: 'post'
    }
  );
  onMounted(() => {
    switchHash();
  });
};
