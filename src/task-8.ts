interface Function {
    customBind(context:object, ...args:number[]):void,
    customCall(context:object, ...args:number[]):void,
}
Function.prototype.customBind = function (context, ...args) {
  let sym = Symbol("func");
  let obj = {
    [sym]: this,
    ...context,
  };

  return function (...rest:number[]) {
    return obj[sym](...args, ...rest);
  };
};

function searchResult(obj:{a:number, b: number, c:number}) {
  return obj.a + obj.b + obj.c;
}

let res = searchResult.customBind(this);

Function.prototype.customCall = function (context, ...args:number[]) {
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