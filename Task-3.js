let array = [2, 1, 6, 12, 18, 0, 8];

const searchMaxNumberArray = (array) => {
  if (array.length === 0) {
    return [];
  }
  let maxValue = array[0];
  for (i = 0; i < array.length; i++) {
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }
  return maxValue;
};

const searchMinNumberArray = (array) => {
  if (array.length === 0) {
    return [];
  }
  let minValue = array[0];
  for (i = 0; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i];
    }
  }
  return minValue;
};

console.log("max Number :", searchMaxNumberArray(array));
console.log("min Number :", searchMinNumberArray(array));
