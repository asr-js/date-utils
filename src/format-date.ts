import parseDate from './parse-date';
import cleanTime from './clean-time';
import parseTime from './parse-time';

/**
 * 格式化为日期
 *
 * @param time 时间
 * @param cFormat 格式化模板
 */
export default function formatDate(time: number | string | Date): string {
  const d: Date = parseDate(time);

  const date = cleanTime(d);
  const now = cleanTime(Date.now());

  // 相差天数
  const diff = (now.getTime() - date.getTime()) / 86400000.0;

  if (diff < 1) {
    return parseTime(d, '{h}:{i}');
  } else if (diff < 2) {
    return '昨天';
  } else if (diff < 3) {
    return '前天';
  } else if (now.getFullYear() === date.getFullYear()) {
    return parseTime(d, '{m}-{d}');
  }
  return parseTime(d, '{y}-{m}-{d}');
}
