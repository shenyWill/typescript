"use strict";
// 函数声明法
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 2));
// 函数表达式法
var addTwo = function (n1, n2) {
    return n1 + n2;
};
console.log(addTwo(2, 3));
// typescript完全支持es6
var addThress = function (n1, n2) { return n1 + n2; };
console.log(addThress(4, 5));
