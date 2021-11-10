"use strict";
const transformToBinary = (number) => {
    let binaryNumber = "";
    for (let i = 0; i < 32; i++) {
        binaryNumber += number % 2;
        number = parseInt(String(number / 2));
    }
    return binaryNumber.split("").reverse().join("");
};
const transformToDecimal = (currentNumber) => {
    let decimalNumber = 0;
    let currentStringLength = currentNumber.length - 1;
    let bit = 1;
    for (let i = currentStringLength; i > -1; i--) {
        decimalNumber += currentNumber[i] === "1" ? bit : 0;
        bit <<= 1;
    }
    return decimalNumber;
};
