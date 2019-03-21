//  判断数组是否还有这个元素
function include(arr, item) {
    for(var i = 0; i < arr.length; i++) {
       if(arr[i] === item) {
           return true;
       } 
    }
    return false;
}
// 返回元素所在的位置
function indexOf(arr, item) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            return i;
        } 
     }
     return -1;
}

// 任意区间随机整数
function getRandom(max, min) {
    min = min || 0;
    if(min > max) {
        var a = min;
        min = max;
        max = a;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
}

// 数组去重
function noRepeat(arr) {
    var __arr = [];
    for(var i = 0; i < arr.length; i++) {
        // 存在返回true, 不存在返回false
        var bool = __arr.indexOf(arr[i])
        if(bool == -1) {
            __arr.push(arr[i]);
        }
    }
    return __arr;
}

function $(ele) {
    return document.querySelector(ele);
}
function $A(ele) {
    return document.querySelectorAll(ele);
}

function getRandomColor() {
    var str = '0123456789abcdef';
    var color = '#';
    for(var i = 0; i < 6; i++) {
        color += str[getRandom(str.length - 1)];
    }
    return color;
}

// 格式化url, 获取参数
function parseUrl(url) {
    var obj = {};
    url = url.split('?')[1].split('#')[0];
    url = url.split('&');
    url.forEach(function (x) {
        var arr = x.split('=');
        obj[arr[0]] = arr[1];
    })
    return obj;
}

// 获取非行内样式
function getStyle(ele, attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr]
    }
    return ele.currentStyle[attr];
}