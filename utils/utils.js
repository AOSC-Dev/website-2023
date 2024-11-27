import axios from 'axios';
import yaml from 'js-yaml';

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

export const requestToYaml = (res) => {
  // 将头信息和内容分开，头信息为yml格式
  let mdContent = res.data.substring(4);
  let i = mdContent.indexOf('---');
  let ymlContent = mdContent.substring(0, i);
  return [mdContent.substring(i), yaml.load(ymlContent)];
};

export const setBackgroundColor = (color) => {
  return 'bg-[' + color + ']';
};

export const BToMB = (byteSize, fixed = 3) => {
  return (byteSize / 1024 / 1024).toFixed(fixed);
};

export const deObserver = (observers) => {
  if (Array.isArray(observers)) {
    observers.forEach((observer) => {
      observer.disconnect();
    });
  } else if (observers) {
    observers.disconnect();
  }
};

export const imgPreOccupiedSpace = (
  anchorImg,
  imgHeight,
  proportion,
  fixedHeight
) => {
  const observer = new ResizeObserver(() => {
    imgHeight.value = fixedHeight
      ? fixedHeight
      : (anchorImg.value.clientWidth / proportion).toFixed(2) + 'px';
  });
  observer.observe(anchorImg.value);
  return observer;
};

export const onImgLoad = (observers, imgHeight) => {
  deObserver(toValue(observers));
  imgHeight.value = 'auto';
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

export const useSeizeSeat = (refName, proportion, imgHeights, fixedHeight) => {
  const newHeights = ref(0);
  if (imgHeights !== undefined) {
    imgHeights.value.push(newHeights);
  } else {
    imgHeights = shallowRef([newHeights]);
  }
  const img = useTemplateRef(refName);

  // 此处异步执行，如果不使用ref包裹返回的observer为null
  let observer = ref();

  onMounted(() => {
    observer.value = imgPreOccupiedSpace(
      img,
      newHeights,
      proportion,
      fixedHeight
    );
  });

  onUnmounted(() => {
    // 在组件销毁前取消观察
    deObserver(observer.value);
  });
  return [observer, imgHeights];
};

export const mergedObjectArrays = (array1, array2) => {
  return array1.map((item, index) => {
    return { ...item, ...array2[index] };
  });
};

export const expandObjectArray = (arrObjects, arrValues, key) => {
  // 确保两个数组的长度相同
  if (arrObjects.length !== arrValues.length) {
    throw new Error('数组长度不匹配');
  }
  // 遍历对象数组和普通数组，合并指定的 key
  return arrObjects.map((obj, index) => {
    // 使用指定的 key 为每个对象添加值
    obj[key] = arrValues[index];
    return obj;
  });
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
