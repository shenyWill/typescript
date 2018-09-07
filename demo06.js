"use strict";
// 变量的作用域， 以函数划分
var yangzi = '刘德华';
function zhengXing() {
    // console.log('yuanwill整形成了'+ yangzi + '的样子');  // 变量提升
    var yangzi = '刘德华';
    console.log('yuanwill整形成了' + yangzi + '的样子');
}
zhengXing();
console.log(yangzi);
function zhengXingTwo() {
    var yangzia = '刘德华';
    {
        var yangzib = '小沈阳';
        console.log('yuanwill整形成了' + yangzib + '的样子');
    }
    console.log('yuanwill整形成了' + yangzia + '的样子');
    // console.log('yuanwill整形成了' + yangzib + '的样子');
}
zhengXingTwo();
