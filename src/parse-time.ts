import parseDate from './parse-date';

/**
 * 解析为时间字符串
 *
 * @param time 时间
 * @param cFormat 格式化模板
 */
export default function parseTime(time: number | string | Date, cFormat?: string): string {
  const date = parseDate(time);

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value: any = formatObj[key];
    if (key === 'a') {
      return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return timeStr;
}
