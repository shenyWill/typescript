function searchXiaoJieJie(age:number):string {
    return `找到了${age}岁的小姐姐`
}

var age:number = 18;

var result:string = searchXiaoJieJie(age); 

console.log(result);

// 有可选参数的函数
function searchXiaoJieJieTwo(age:number, stature?:string):string {
    let yy:string = '';
    yy=`找到了${age}岁`;
    if (stature != undefined) {
        yy += `${stature}`
    }
    return `${yy}的小姐姐`
}

var resultTwo:string = searchXiaoJieJieTwo(12,'超好身材');
console.log(resultTwo);


// 有默认值参数的函数
function searchXiaoJieJieThree(age:number=18, stature:string='水蛇腰'):string {
    return `找到了${age}岁${stature}的小姐姐`
}
var resultThree:string = searchXiaoJieJieThree(22, '大长腿');
console.log(resultThree);


// 有剩余参数的函数
function searchXiaoJieJieFour(...xuqiu:any[]):string {
    let yy:string = '找到了';
    for (let item of xuqiu) {
        yy += item + ',';
    }
    yy += '的小姐姐';
    return yy;
}
var resultFour:string = searchXiaoJieJieFour(22, '大长腿','瓜子脸','水蛇腰');
console.log(resultFour);