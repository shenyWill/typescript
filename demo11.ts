class XiaoJieJie{
    name: string
    age: number
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    say(){
        console.log('hello man');
    }
}

let xiaojiejie:XiaoJieJie = new XiaoJieJie('fanbingbing', 23);
console.log(xiaojiejie);
xiaojiejie.say();