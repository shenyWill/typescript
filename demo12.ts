class XiaoJieJieJie{
    public sex:string
    protected name: string
    private age: number
    public constructor(sex:string, name:string, age:number) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    public sayHello(hello:string){
        console.log(hello);
    }
    private sayLove(){
        console.log('love');
    }
}

var jiejie:XiaoJieJieJie = new XiaoJieJieJie('女', '迪丽热巴', 22);
console.log(jiejie.sex);
jiejie.sayHello('hello');


class Man {
    public readonly sex:string='man'
}

var gege:Man = new Man();
console.log(gege.sex);
// gege.sex = 's';