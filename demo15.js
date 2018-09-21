"use strict";
var goodLook;
(function (goodLook) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = "刘德华";
        }
        Dehua.prototype.talk = function () {
            console.log("我是帅哥刘德华");
        };
        return Dehua;
    }());
    goodLook.Dehua = Dehua;
})(goodLook || (goodLook = {}));
var uglyLook;
(function (uglyLook) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = "马德华";
        }
        Dehua.prototype.talk = function () {
            console.log("我是二师兄马德华");
        };
        return Dehua;
    }());
    uglyLook.Dehua = Dehua;
})(uglyLook || (uglyLook = {}));
var dehua1 = new goodLook.Dehua();
var dehua2 = new uglyLook.Dehua();
dehua1.talk();
dehua2.talk();
