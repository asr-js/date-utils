import parseDate from './parse-date';
import parseTime from './parse-time';
/**
 * 格式化为时间
 *
 * @param time 时间
 * @param cFormat 格式化模板
 */
export default function formatTime(time, cFormat) {
    const d = parseDate(time);
    const now = Date.now();
    const diff = (now - d.getTime()) / 1000;
    if (diff < 30) {
        return '刚刚';
    }
    else if (diff < 3600) {
        return Math.ceil(diff / 60) + '分钟前';
    }
    else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前';
    }
    else if (diff < 3600 * 24 * 2) {
        return '1天前';
    }
    if (cFormat) {
        return parseTime(d, cFormat);
    }
    else {
        return (d.getMonth() +
            1 +
            '月' +
            d.getDate() +
            '日' +
            d.getHours() +
            '时' +
            d.getMinutes() +
            '分');
    }
}
//# sourceMappingURL=format-time.js.map