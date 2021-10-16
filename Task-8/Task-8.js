// bind

Function.prototype.customBind = function (context, ...args) {
  let sym = Symbol("func");
  let obj = {
    ...context,
    [sym]: this,
  };

  return function (...rest) {
    return obj[sym](...args, ...rest);
  };
};

function f() {
  return this.a + this.b + this.c;
}

let res = f.customBind();
console.log(res);

// call

Function.prototype.customCall = function (context, ...args) {
  let sym = Symbol("func");
  let obj = {
    ...context,
    [sym]: this,
  };
  return (function (...rest) {
    return obj[sym](...args);
  })();
};

let result = f.customCall;
console.log(result);
