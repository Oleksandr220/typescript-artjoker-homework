const searchNumbers = document.getElementById("Fibanachi-value");
const fibanachiText = document.getElementById("Fibanachi-array");
const btnResalt = document.querySelector("button");

// Функция для вычисления чисел Фибоначчи + Мемоизация.

const makeFabianachiNumbers = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  } else {
    return makeFabianachiNumbers(n - 1) + makeFabianachiNumbers(n - 2);
  }
};

// Функция для добовления чисел Фибоначчи в масив.
let fabianachiArray = [];

function memo(number) {
  let cache = {};
  // Масив для чисел Фибоначчи.
  return (number) => {
    if (number in cache) {
      console.log("Fetching arrey from cache");
      reset();
      return (fibanachiText.textContent = cache[number]);
    } else {
      for (let y = 0; y < number; y++) {
        fabianachiArray.push(makeFabianachiNumbers(y));
        fibanachiText.textContent = fabianachiArray;
      }
      reset();
      let result = fabianachiArray;
      cache[number] = result;
      console.log("Fetching arrey Fibanachi");
      console.log(cache);
      return (fabianachiArray = []);
    }
  };
}
const reset = () => {
  searchNumbers.value = "";
};

const makeArrayFabianachi = memo();
btnResalt.onclick = () =>
  makeArrayFabianachi(searchNumbers.value.replace(/[^\d.]/g, ""));
