const transformToBinary = (number: number) => {
  let binaryNumber: string = "";

  for (let i: number = 0; i < 32; i++) {
    binaryNumber += number % 2;
    number = parseInt(String(number / 2));
  }
  return binaryNumber.split("").reverse().join("");
};

const transformToDecimal = (currentNumber:string) => {
  let decimalNumber: number = 0;
  let currentStringLength = currentNumber.length - 1;
  let bit = 1;
  for (let i: number = currentStringLength; i > -1; i--) {
    decimalNumber += currentNumber[i] === "1" ? bit : 0;

    bit <<= 1;
  }
  return decimalNumber;
};