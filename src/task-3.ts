let array: number[] = [2, 1, 6, 12, 18, 0, 8];

const searchMaxNumberArray = (array: number[]): number | [] => {
  if (array.length === 0) {
    return [];
  }
  let maxValue = array[0];
  for (let i: number = 0; i < array.length; i++) {
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }
  return maxValue;
};

const searchMinNumberArray = (array: number[]): number | [] => {
  if (array.length === 0) {
    return [];
  }
  let minValue = array[0];
  for (let i: number = 0; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i];
    }
  }
  return minValue;
};