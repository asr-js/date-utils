import parseDate from './parse-date';

/**
 * 清空时间信息
 *
 * @param time 时间
 */
export default function cleanTime(time: number | string | Date): Date {
  const date: Date = parseDate(time);

  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
}
