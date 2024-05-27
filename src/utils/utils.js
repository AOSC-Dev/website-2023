export function getImgUrl(url) {
  return new URL(`${url}`, import.meta.url).href
}

export function toOutUrl(url) {
  window.open(url)
}