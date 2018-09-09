// 封装一个获取日期字符串的函数
function dateToString() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();  // 默认是0--11月，因此实际需+1
    var day = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var week = d.getDay();

    function weekStr(num) {
        switch (num) {
            case 0:
                return "周日";
            case 1:
                return "周一";
            case 2:
                return "周二";
            case 3:
                return "周三";
            case 4:
                return "周四";
            case 5:
                return "周五";
            case 6:
                return "周六";
            default:
                break;
        }
    }

    function formatNum(num) {
        if (num < 10) {
            return "0"+num;
        }else {
            return num;
        }
    }
    // 拼接时间字符串
    var dateStr = year+"年"+formatNum(month+1)+"月"+formatNum(day)+"日"+" "+formatNum(hour)+":"+formatNum(minute)+":"+formatNum(second)+" "+weekStr(week);
    // 获得html标签对象
    var dateSpan = document.getElementById("dateText");
    // 重新设置标签内容
    dateSpan.innerHTML = dateStr;

    // 定时器，只会执行一次,使用递归的方式每隔1秒调用一次自身
    window.setTimeout(dateToString,1000);
}

// 调用函数
dateToString();

// 开启定时器,会在指定时间内重复执行
// window.setInterval(dateToString,1000);