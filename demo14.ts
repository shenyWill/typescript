
interface Husband{
    sex: string,
    interest: string,
    // 接口可选参数
    bayBag?: Boolean
}

let myHusband:Husband = {sex: 'man', interest: 'reading, work'};

let myHusbandTwo:Husband = {sex: 'man', interest: 'play basketball', bayBag: true};

console.log(myHusband);
console.log(myHusbandTwo);

interface SearchMan{
    (source:string, subString:string):boolean
}
let mySearch:SearchMan;

mySearch = function(source:string, subString:string):boolean{
    let flag = source.search(subString);
    return (flag != -1);
}

console.log(mySearch('高、福、帅、德', '胖'));
console.log(mySearch('高、福、帅、德', '高'));