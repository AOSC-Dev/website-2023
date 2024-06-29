import router from '../router.js'

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