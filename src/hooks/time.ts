// 时间戳日期转换
export function timeTamp(time: any) {
  const d = new Date(time * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000

  const yyyy = d.getFullYear() + '-'

  const MM = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-'

  const dd = (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) + ' '

  const HH = (d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) + ':'

  const mm = (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) + ':'

  const ss = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()

  return yyyy + MM + dd + HH + mm + ss
}


