var Tools = {
    // 转换url（多次转换）
    decode(url) {

        let url2;

        try {
            url2 = decodeURIComponent(url);
        } catch (e) {

        }

        if (!url2 || url2 === url) {
            return url;
        }

        return decode(url2);

    },
    // 格式化日期
    formatDate: function (dateValue, formatStr = 'yyyy-mm-dd') {
        var timestamp = dateValue;
        var fmt = formatStr;
        var o;
        var k;
        var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

        if (!dateValue) {
            return '';
        }

        if (typeof timestamp !== 'object') {
            timestamp = new Date(timestamp);
        }
        fmt = fmt || 'yyyy-MM-dd';

        o = {
            'M+': timestamp.getMonth() + 1,
            'd+': timestamp.getDate(),
            'h+': timestamp.getHours() % 12,
            'H+': timestamp.getHours(),
            'm+': timestamp.getMinutes(),
            's+': timestamp.getSeconds(),
            'q+': Math.floor((timestamp.getMonth() + 3) / 3),
            'S': timestamp.getMilliseconds(),
            'W+': week[timestamp.getDay()]
        };

        if ((/(y+)/).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (timestamp.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                // eslint-disable-next-line eqeqeq
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }

        return fmt;
    },

}




module.exports = Tools