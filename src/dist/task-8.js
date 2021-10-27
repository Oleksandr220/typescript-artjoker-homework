"use strict";
// bind
Function.prototype.customBind = function (context, ...args) {
    let sym = Symbol("func");
    let obj = Object.assign(Object.assign({}, context), { [sym]: this });
    return function (...rest) {
        return obj[sym](...args, ...rest);
    };
};
function searchResult() {
    return this.a + this.b + this.c;
}
let res = searchResult.customBind(this);
// console.log(res);
// call
Function.prototype.customCall = function (context, ...args) {
    let sym = Symbol("func");
    let obj = Object.assign(Object.assign({}, context), { [sym]: this });
    return (function (...rest) {
        return obj[sym](...args);
    })();
};
let result = searchResult.customCall;
// console.log(result);
