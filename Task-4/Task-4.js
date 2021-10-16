//

const transformToBinary = (number) => {
  let binaryNumber = "";

  for (i = 0; i < 32; i++) {
    binaryNumber += number % 2;
    number = parseInt(number / 2);
  }
  return binaryNumber.split("").reverse().join("");
};

console.log(transformToBinary(18));

const transformToDec = (curStr) => {
  let decNumber = 0;
  let curStrLen = curStr.length - 1;
  let bit = 1;
  for (i = curStrLen; i > -1; i--) {
    decNumber += curStr[i] === "1" ? bit : 0;

    bit <<= 1;
  }
  return decNumber;
};

console.log(transformToDec("00000010010"));
