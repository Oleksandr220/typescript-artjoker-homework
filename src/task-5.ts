type CallbackFunc = (number: number) => number
interface ICacheNumber  {
  [key: string]: number;
}

const memoFunction = (fn: CallbackFunc) => {
    let cache: ICacheNumber = {
  };
  return (number:number) => {
    if (number in cache) {
      return cache[number];
    }  
      let result = fn(number);
      cache[number] = result;
      return result;
  };
};
const factorial = memoFunction((num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
});