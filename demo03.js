"use strict";
var age = 18;
var stature = 178.5;
var tag = NaN;
console.log(age);
console.log(stature);
console.log('--------------------------------');
var yuanwill = 'yuanwill.com';
console.log(yuanwill);
var b = true;
var c = false;
console.log('-----------------------------------');
// enum 类型 枚举 人：男人，女人，中性  四季
var Ren;
(function (Ren) {
    Ren["man"] = "\u7537\u4EBA";
    Ren["woman"] = "\u5973\u4EBA";
    Ren["yao"] = "\u5996";
})(Ren || (Ren = {}));
console.log(Ren.yao);
// any 类型 
var t = 10;
t = 'yuanwill';
t = true;
console.log(t);
// null
