const makeFabianachiNumbers = (number: number):number => {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  return makeFabianachiNumbers(number - 1) + makeFabianachiNumbers(number - 2);
};

let fabianachiArray: number[] = [];

interface ICache  {
  [key: string]: number[];
}

function memoNumber(number: number) {
  let cache: ICache = {};
  return (number: number) => {
    if (number in cache) {
      return fabianachiArray.push(...cache[number]);
    }
    for (let y = 0; y < number; y++) {
      const searchResult = makeFabianachiNumbers(y)
      fabianachiArray.push(searchResult);
    }
    let result = fabianachiArray;
    cache[number] = result;
    return (fabianachiArray = []);
  };
}

const makeArrayFabianachi = memoNumber(0);
makeArrayFabianachi(5)