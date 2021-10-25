// Функция для вычисления чисел Фибоначчи + Мемоизация.

const makeFabianachiNumbers = (number:number):number => {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  return makeFabianachiNumbers(number - 1) + makeFabianachiNumbers(number - 2);
};

// Функция для добовления чисел Фибоначчи в масив.
let fabianachiArray:number[] = [];

interface ICache  {
  [key: string]: number[];
}

function memo(number:number) {
  let cache: ICache = {};
  // Масив для чисел Фибоначчи.
  return (number:number) => {
    if (number in cache) {
      console.log("Fetching arrey from cache");
      console.log(cache[number]);
      return fabianachiArray.push(...cache[number]);
    }
    for (let y = 0; y < number; y++) {
      const searchResult = makeFabianachiNumbers(y)
      fabianachiArray.push(searchResult);
    }
    let result = fabianachiArray;
    cache[number] = result;
    console.log(fabianachiArray);
    return (fabianachiArray = []);
  };
}

const makeArrayFabianachi = memo(0);
makeArrayFabianachi(5)
makeArrayFabianachi(7);
makeArrayFabianachi(8);
