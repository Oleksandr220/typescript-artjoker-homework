"use strict";
Function.prototype.customBind = function (context, ...args) {
    let sym = Symbol("func");
    let obj = Object.assign({ [sym]: this }, context);
    return function (...rest) {
        return obj[sym](...args, ...rest);
    };
};
function searchResult(obj) {
    return obj.a + obj.b + obj.c;
}
let res = searchResult.customBind(this);
Function.prototype.customCall = function (context, ...args) {
    let sym = Symbol("func");
    let obj = Object.assign(Object.assign({}, context), { [sym]: this });
    return (function (...rest) {
        return obj[sym](...args);
    })();
};
let result = searchResult.customCall;
