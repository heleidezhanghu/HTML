/*
获取标签对象
 */
var small = document.getElementById("smallImg");
var big = document.getElementById("bigImg");

function showPic() {
    // 注册事件
    small.onmouseenter = disPic;
    small.onmouseleave = noDisPic;
}

// 事件方法显示图片
function disPic() {
    big.style.display = "block";
}

// 事件方法隐藏图片
function noDisPic() {
    big.style.display = "none";
}

showPic();