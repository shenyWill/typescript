"use strict";
function searchXiaoJieJie(age) {
    return "\u627E\u5230\u4E86" + age + "\u5C81\u7684\u5C0F\u59D0\u59D0";
}
var age = 18;
var result = searchXiaoJieJie(age);
console.log(result);
// 有可选参数的函数
function searchXiaoJieJieTwo(age, stature) {
    var yy = '';
    yy = "\u627E\u5230\u4E86" + age + "\u5C81";
    if (stature != undefined) {
        yy += "" + stature;
    }
    return yy + "\u7684\u5C0F\u59D0\u59D0";
}
var resultTwo = searchXiaoJieJieTwo(12, '超好身材');
console.log(resultTwo);
// 有默认值参数的函数
function searchXiaoJieJieThree(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '水蛇腰'; }
    return "\u627E\u5230\u4E86" + age + "\u5C81" + stature + "\u7684\u5C0F\u59D0\u59D0";
}
var resultThree = searchXiaoJieJieThree(22, '大长腿');
console.log(resultThree);
// 有剩余参数的函数
function searchXiaoJieJieFour() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var _a = 0, xuqiu_1 = xuqiu; _a < xuqiu_1.length; _a++) {
        var item = xuqiu_1[_a];
        yy += item + ',';
    }
    yy += '的小姐姐';
    return yy;
}
var resultFour = searchXiaoJieJieFour(22, '大长腿', '瓜子脸', '水蛇腰');
console.log(resultFour);
