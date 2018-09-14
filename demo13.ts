class Will {
    public name:string
    public age:number
    public skill:string
    constructor(name:string, age:number, skill:string) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    public interest(){
        console.log('search girl');
    }
}

let yuan:Will = new Will('yuan', 23, 'write code');
yuan.interest();

/* 继承 */
class SmallWill extends Will {
    public xingxiang:string = 'goodlook'
    public getMoney(){
        console.log('get more money');
    }

    /* 重写 */
    public interest(){
        // 保留父类行为
        super.interest();

        // 增加自己行为
        console.log('build platform');
    }
}

let smallWill:SmallWill = new SmallWill('小渊', 10, 'play basketball');
 smallWill.interest();
 smallWill.getMoney();
 console.log(smallWill.name);
 console.log(smallWill.xingxiang);
