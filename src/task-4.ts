const transformToBinary = (number:number) => {
  let binaryNumber:string = "";

  for (let i = 0; i < 32; i++) {
    binaryNumber += number % 2;
    number = parseInt(String(number / 2));
  }
  return binaryNumber.split("").reverse().join("");
};

// console.log(transformToBinary(18));

const transformToDec = (curStr:string) => {
  let decNumber = 0;
  let curStrLen = curStr.length - 1;
  let bit = 1;
  for (let i = curStrLen; i > -1; i--) {
    decNumber += curStr[i] === "1" ? bit : 0;

    bit <<= 1;
  }
  return decNumber;
};

// console.log(transformToDec("00000010010"));