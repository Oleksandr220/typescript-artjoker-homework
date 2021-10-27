// ForEach
type CallbackFunction = (...args: any) => any

interface Array<T> { 
    ownForEach(this:number[] | string[],callBack:CallbackFunction): void,
    ownMap(callBack: CallbackFunction): number[],
    ownFillter(callBack: CallbackFunction): number[],
    ownReduce(callBack: CallbackFunction, acc: number): number,
    ownEvery(callBack: CallbackFunction): boolean,
    ownSome(callBack: CallbackFunction): boolean
}

const arr: number[] = [2, 4, 6, 5, 8, 9, 2, 1, 12];

Array.prototype.ownForEach = function (callBack) {
  for (let i:number = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

// arr.ownForEach((el) => console.log(el));

// Map

Array.prototype.ownMap = function (callBack) {
  let res:number [] | [] = [];

  for (let i in this) {
    res[i] = callBack(this[i], i, this);
  }
  return res.splice(0, this.length);
};

// console.log(arr.ownMap((el) => el * 2));

// Filter

Array.prototype.ownFillter = function (callBack) {
  let res:number []  = [];

  for (let i:number = 0; i <= this.length - 1; i++) {
    if (callBack(this[i], i, this)) {
      res.push(this[i]);
    }
  }

  return res;
};
// console.log(arr.ownFillter((el) => el <= 3));

// Reduce

Array.prototype.ownReduce = function (callBack, acc) {
  let res = acc || 0;

  for (let i:number = 0; i <= this.length - 1; i++) {
    res = callBack(this[i], res);
  }
  return res;
};
// console.log(arr.ownReduce((el:any, acc:any) => el + acc, 100));

// Every

Array.prototype.ownEvery = function (callback) {
  for (let i:number = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

// console.log(arr.ownEvery((value:any) => value % 2 === 0));
// console.log(every(arr, (value) => value % 2 === 0));

// Some

Array.prototype.ownSome = function (callback) {
  for (let i:number = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};
// console.log(arr.ownSome((value) => value % 2 === 0));
