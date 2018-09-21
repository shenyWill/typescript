"use strict";
var myHusband = { sex: 'man', interest: 'reading, work' };
var myHusbandTwo = { sex: 'man', interest: 'play basketball', bayBag: true };
console.log(myHusband);
console.log(myHusbandTwo);
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高、福、帅、德', '胖'));
console.log(mySearch('高、福、帅、德', '高'));
