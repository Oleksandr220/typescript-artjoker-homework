type CallbackFunc = (number: number) => number
interface ICacheNumber  {
  [key: string]: number;
}

const memoFunction = (fn: CallbackFunc) => {
    let cache: ICacheNumber = {
  };
  return (number:number) => {
    if (number in cache) {
      console.log("Fatching from caheche", number);
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

// console.log(factorial(4));
// console.log(factorial(5));