/**
 * 解析为Date对象
 *
 * @param time 时间
 */
export default function parseDate(time) {
    if (typeof time === 'number') {
        if (time.toString().length === 10) {
            time *= 1000;
        }
    }
    else if (typeof time === 'string') {
        time = time
            .replace(/\-/g, '/')
            .replace('T', ' ')
            .replace(/\.[\s\S]*/g, '');
    }
    else if (time instanceof Date) {
        time = time.getTime();
    }
    try {
        return new Date(time);
    }
    catch (err) {
        console.error('convert to date failed! source: ', time);
        throw err;
    }
}
//# sourceMappingURL=parse-date.js.map