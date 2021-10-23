// Функция для вычисления чисел Фибоначчи + Мемоизация.

const makeFabianachiNumbers = (number) => {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  return makeFabianachiNumbers(number - 1) + makeFabianachiNumbers(number - 2);
};

// Функция для добовления чисел Фибоначчи в масив.
let fabianachiArray = [];

function memo(number) {
  let cache = {};
  // Масив для чисел Фибоначчи.
  return (number) => {
    if (number in cache) {
      console.log("Fetching arrey from cache");
      console.log(cache[number]);
      return fabianachiArray.push(cache[number]);
    }
    for (let y = 0; y < number; y++) {
      fabianachiArray.push(makeFabianachiNumbers(y));
    }
    let result = fabianachiArray;
    cache[number] = result;
    console.log(fabianachiArray);
    return (fabianachiArray = []);
  };
}

const makeArrayFabianachi = memo();
// makeArrayFabianachi(7);
// makeArrayFabianachi(8);
// makeArrayFabianachi(5);
// makeArrayFabianachi(9);
// makeArrayFabianachi(7);
// makeArrayFabianachi(8);
