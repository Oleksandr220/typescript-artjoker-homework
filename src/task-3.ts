let array: number[] = [2, 1, 6, 12, 18, 0, 8];

const getMaxNumber = (array: number[]): number | [] => {
  if (array.length === 0) {
    return [];
  }
  let maxNumberOfArray = array[0];
  for (let i: number = 0; i < array.length; i++) {
    if (maxNumberOfArray < array[i]) {
      maxNumberOfArray = array[i];
    }
  }
  return maxNumberOfArray;
};

const getMinNumber = (array: number[]): number | [] => {
  if (array.length === 0) {
    return [];
  }
  let minNumberOfArray = array[0];
  for (let i: number = 0; i < array.length; i++) {
    if (minNumberOfArray > array[i]) {
      minNumberOfArray = array[i];
    }
  }
  return minNumberOfArray;
};