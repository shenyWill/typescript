namespace goodLook{
    export class Dehua{
        public name:string = "刘德华"
        talk(){
            console.log("我是帅哥刘德华")
        }
    }
}

namespace uglyLook{
    export class Dehua{
        public name:string = "马德华"
        talk(){
            console.log("我是二师兄马德华")
        }
    }
}

let dehua1:goodLook.Dehua = new goodLook.Dehua();

let dehua2:uglyLook.Dehua = new uglyLook.Dehua();

dehua1.talk();
dehua2.talk();