// let yuanwill = {
//     name : 'will',
//     website: 'will.com',
//     age: 18,
//     saySomething: function() {
//         console.log('for technology');
//     }
// }
// console.log(yuanwill.name);
// yuanwill.saySomething();

// 引用类型 array String Date RegExp

// 申明数组的两种方法 
// let arr1:number[];
// let arr2:Array<string>;

// 字面量赋值法
// let arr1:number[] = [];
let arr2:number[] = [1,2,3,4,5];

let arr3:Array<string> = ['yuan','will','shen'];
let arr4:Array<boolean> = [true, false, true, true];

// 构造函数赋值法
let arr11:number[] = new Array();
let arr22:number[] = new Array(1,2,3,4,5);

let arr33:Array<string> = new Array('yuan','will','shen');
let arr44:Array<boolean> = new Array(true, false, true, true);

// 元祖
let x:[string, number] = ['hello', 10];