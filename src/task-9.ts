type CallbackFunction = (el: number, i: number) => number;
interface Array<T> { 
  ownForEach(this:number[],callBack:CallbackFunction): void,
  ownMap(this:number[], callBack: CallbackFunction): number[],
  ownFillter(this:number[], callBack: CallbackFunction): number[],
  ownReduce(this:number[], callBack:CallbackFunction, acc: number): number,
  ownEvery(this:number[], callBack: CallbackFunction): boolean,
  ownSome(this:number[], callBack: CallbackFunction): boolean
}



// ForEach
const arr: number[] = [2, 4, 6, 5, 8, 9, 2, 1, 12];

Array.prototype.ownForEach = function (callBack) {
  for (let i:number = 0; i < this.length; i++) {
    callBack(this[i], i);
  }
};

// arr.ownForEach((el) => console.log(el));

// Map

Array.prototype.ownMap = function (callBack) {
  let res:number [] | [] = [];

  for (let i:number = 0; i <= this.length - 1; i++) {
    res[i] = callBack(this[i], i);
  }
  return res.splice(0, this.length);
};

// console.log(arr.ownMap((el) => el * 2));

// Filter

Array.prototype.ownFillter = function (callBack) {
  let res:number []  = [];

  for (let i:number = 0; i <= this.length - 1; i++) {
    if (callBack(this[i], i)) {
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
// console.log(arr.ownReduce((el, acc) => el + acc, 100));

// Every

Array.prototype.ownEvery = function (callback) {
  for (let i:number = 0; i < this.length; i++) {
    if (!callback(this[i], i)) {
      return false;
    }
  }

  return true;
};

// console.log(arr.ownEvery((value) => value % 2 === 0));
// console.log(every(arr, (value) => value % 2 === 0));

// Some

Array.prototype.ownSome = function (callback) {
  for (let i:number = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      return false;
    }
  }

  return true;
};
// console.log(arr.ownSome((value) => value % 2 === 0));
