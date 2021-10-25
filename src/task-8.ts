// bind

interface Function {
    customBind(context:any, ...args:number[]):any,
    customCall(context:any, ...args:number[]):any,
}
Function.prototype.customBind = function (context, ...args) {
  let sym = Symbol("func");
  let obj = {
    ...context,
    [sym]: this,
  };

  return function (...rest:number[]) {
    return obj[sym](...args, ...rest);
  };
};

function searchResult(this:any) {
  return this.a + this.b + this.c;
}

let res = searchResult.customBind(0);
// console.log(res);

// call

Function.prototype.customCall = function (context:any, ...args:number[]) {
  let sym = Symbol("func");
  let obj = {
    ...context,
    [sym]: this,
  };
  return (function (...rest:number[]) {
    return obj[sym](...args);
  })();
};

let result = searchResult.customCall;
// console.log(result);
