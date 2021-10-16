let arr = [2, 4, 6, 14, 8, 5, 1, 24, 17];

const getMaxNumber = (arr) => {
  let maxValue = arr[0];
  for (i = 0; i < arr.length; i += 1) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

const getMinNumber = (arr) => {
  let minValue = arr[0];
  for (i = 0; i < arr.length; i += 1) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
  }
  return minValue;
};

console.log("max Number :", getMaxNumber(arr));
console.log("min Number :", getMinNumber(arr));
