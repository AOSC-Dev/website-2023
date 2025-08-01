import router from '../router.js';
import { watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import yaml from 'js-yaml';
import { onMounted } from 'vue';
import { useHighBrightnessControllerStore } from '../stores/miscellaneous.js';
import { useHead } from '@unhead/vue';

export function getImgUrl(url) {
  return new URL(`${url}`, import.meta.url).href;
}

export function toOutUrl(url) {
  window.open(url);
}

export function setTitle(titlePre) {
  useHead({ title: titlePre });
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

export const handleCopyCodeSuccess = () => {
  ElMessage.success('复制成功');
};
