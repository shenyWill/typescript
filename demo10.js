"use strict";
var reg1 = new RegExp('yuanwill');
console.log(reg1);
var reg2 = new RegExp('yuanwill', 'g');
console.log(reg2);
var reg3 = /yuanwill/;
var reg4 = /yuanwill/gi;
console.log(reg3);
console.log(reg4);
var results = reg3.test('yuanwill');
console.log(results);
