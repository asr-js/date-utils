/**
 * 解析为时间长度
 *
 * @param millisecond 毫秒数
 */
export default function formatDuration(millisecond: number): string {
  let milliseconds: number = Math.floor(millisecond / 1000);

  if (milliseconds <= 0) {
    return '时间到';
  }

  const spans = [60, 60, 24, 1];
  const companies = ['秒', '分钟', '小时', '天'];
  const times = [0, 0, 0, 0];

  for (let i = 0; i < spans.length; i++) {
    times[i] = milliseconds % spans[i];
    milliseconds = Math.floor(milliseconds / spans[i]);
    if (milliseconds === 0) {
      break;
    }
  }

  for (let i = spans.length - 1; i >= 0; i--) {
    if (times[i] > 0) {
      return times[i] + companies[i];
    }
  }
  return times[0] + companies[0];
}
