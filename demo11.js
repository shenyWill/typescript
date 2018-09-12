"use strict";
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('hello man');
    };
    return XiaoJieJie;
}());
var xiaojiejie = new XiaoJieJie('fanbingbing', 23);
console.log(xiaojiejie);
xiaojiejie.say();
