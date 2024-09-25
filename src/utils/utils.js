import router from '../router.js';
import axios from 'axios';
import { ElMessage } from 'element-plus';
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

export function toUrl(url) {
  if (url.indexOf('http') == 0) {
    toOutUrl(url);
  } else if (url.indexOf('/') == 0) {
    router.push(url);
  }
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

const calculateFormDataSize = (formData) => {
  let totalSize = 0;

  for (const [_key, value] of formData.entries()) {
    if (typeof value === 'string') {
      // 计算字符串的字节大小
      totalSize += new TextEncoder().encode(value).length;
    } else if (value instanceof File) {
      // 对于文件，直接使用其 size 属性
      totalSize += value.size;
    }
    // 你可以根据需要处理其他类型
  }

  return Number((totalSize / 1024 / 1024).toFixed(2));
};

export const requestPostJson = (() => {
  let keys = {};
  let promise = {};
  return (url, formdata, params, key) => {
    if (!key) {
      key = url;
    }
    if (!keys[key]) {
      keys[key] = true;
      promise[key] = axios({
        url,
        method: 'post',
        formdata,
        params,
        // 1MB等6秒 单位ms
        timeout: Math.ceil(calculateFormDataSize(formdata)) * 6000
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

export const imgPreOccupiedSpace = (anchorImg, imgHeight, proportion) => {
  const observer = new ResizeObserver(() => {
    imgHeight.value =
      (anchorImg.value.clientWidth / proportion).toFixed(2) + 'px';
  });
  observer.observe(anchorImg.value);
  return observer;
};

export const onImgLoad = (observers, imgHeight) => {
  deObserver(observers);
  imgHeight.value = 'auto';
};
