// 变量的作用域， 以函数划分
var yangzi:string = '刘德华';
function zhengXing():void {
    // console.log('yuanwill整形成了'+ yangzi + '的样子');  // 变量提升
    var yangzi:string = '刘德华';
    console.log('yuanwill整形成了'+ yangzi + '的样子');
}

zhengXing();
console.log(yangzi);

function zhengXingTwo():void {
    var yangzia:string = '刘德华';
    {
        let  yangzib:string = '小沈阳';
        console.log('yuanwill整形成了' + yangzib + '的样子');
    }
    console.log('yuanwill整形成了' + yangzia + '的样子');
    // console.log('yuanwill整形成了' + yangzib + '的样子');
}

zhengXingTwo();