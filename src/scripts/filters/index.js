// https://vuejs.bootcss.com/guide/filters.html

export const capitalize = function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}
