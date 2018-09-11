let reg1:RegExp = new RegExp('yuanwill');
console.log(reg1);

let reg2:RegExp = new RegExp('yuanwill','g');
console.log(reg2);

let reg3:RegExp = /yuanwill/;
let reg4:RegExp = /yuanwill/gi;

console.log(reg3);
console.log(reg4);

let results:boolean = reg3.test('yuanwill');
console.log(results);