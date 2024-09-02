import router from '../router.js'
import axios from 'axios'

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

export const requestJson = (() => {
  let keys = {}
  let promise = {}
  return (url, parameterObj, key) => {
    if (!key) {
      key = url;
    }
    if (!keys[key]) {
      keys[key] = true;
      promise[key] = axios({
        url,
        method: 'get',
        data: parameterObj
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

export const setBackgroundColor = (color) => {
  return 'bg-[' + color + ']'
}