import router from '../router.js'
import axios from 'axios'
import yaml from 'js-yaml';

export function getImgUrl(url) {
  return new URL(`${url}`, import.meta.url).href
}

export function toOutUrl(url) {
  window.open(url)
}

export const title = '安同开源社区 (AOSC)'

export function setTitle(titlePre) {
  document.title = titlePre + ' | ' + title
}

export function toUrl(url) {
  if (url.indexOf("http") == 0) {
    toOutUrl(url);
  } else if (url.indexOf("/") == 0) {
    router.push(url);
  }
}

export const requestGetJson = (() => {
  let keys = {}
  let promise = {}
  return (url, params, key) => {
    if (!key) {
      key = url;
    }
    if (!keys[key]) {
      keys[key] = true;
      promise[key] = axios({
        url,
        method: 'get',
        params
      }).then(resolve => {
        return [resolve, null];
      }).catch(error => {
        [null, error];
      }).finally(() => {
        keys[key] = false;
      })
      return promise[key]
    } else {
      return promise[key];
    }
  }
})()

export const requestPostJson = (() => {
  let keys = {}
  let promise = {}
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
        params
      }).then(resolve => {
        return [resolve.data, null];
      }).catch(error => {
        [null, error];
      }).finally(() => {
        keys[key] = false;
      })
      return promise[key]
    } else {
      return promise[key];
    }
  }
})()

export const requestToYaml = (res) => {
  // 将头信息和内容分开，头信息为yml格式
  let mdContent = res.data.substring(4);
  let i = mdContent.indexOf("---");
  let ymlContent = mdContent.substring(0, i);
  return [mdContent.substring(i), yaml.load(ymlContent)];
}

export const setBackgroundColor = (color) => {
  return 'bg-[' + color + ']'
}
