"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Will = /** @class */ (function () {
    function Will(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Will.prototype.interest = function () {
        console.log('search girl');
    };
    return Will;
}());
var yuan = new Will('yuan', 23, 'write code');
yuan.interest();
/* 继承 */
var SmallWill = /** @class */ (function (_super) {
    __extends(SmallWill, _super);
    function SmallWill() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = 'goodlook';
        return _this;
    }
    SmallWill.prototype.getMoney = function () {
        console.log('get more money');
    };
    /* 重写 */
    SmallWill.prototype.interest = function () {
        // 保留父类行为
        _super.prototype.interest.call(this);
        // 增加自己行为
        console.log('build platform');
    };
    return SmallWill;
}(Will));
var smallWill = new SmallWill('小渊', 10, 'play basketball');
smallWill.interest();
smallWill.getMoney();
console.log(smallWill.name);
console.log(smallWill.xingxiang);
