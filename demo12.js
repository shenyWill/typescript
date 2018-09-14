"use strict";
var XiaoJieJieJie = /** @class */ (function () {
    function XiaoJieJieJie(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJieJieJie.prototype.sayHello = function (hello) {
        console.log(hello);
    };
    XiaoJieJieJie.prototype.sayLove = function () {
        console.log('love');
    };
    return XiaoJieJieJie;
}());
var jiejie = new XiaoJieJieJie('女', '迪丽热巴', 22);
console.log(jiejie.sex);
jiejie.sayHello('hello');
var Man = /** @class */ (function () {
    function Man() {
        this.sex = 'man';
    }
    return Man;
}());
var gege = new Man();
console.log(gege.sex);
// gege.sex = 's';
