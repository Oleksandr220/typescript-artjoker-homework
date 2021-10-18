// ForEach

const arr = [2, 4, 6, 5, 8, 9, 2, 1, 24];

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

forEach(arr, (value) => console.log(value));

// Map

function map(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}

console.log(map(arr, (value) => value * 2));

// Filter

function filter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filter(arr, (value) => value % 2 === 0));

// Every

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }

  return true;
}

console.log(every(arr, (value) => value % 2 === 0));

// Some

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }

  return false;
}

console.log(some(arr, (value) => value % 2 === 0));

// Reduce

function reduce(arr, callback, initial) {
  let result = initial || 0;

  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }

  return result;
}

console.log(reduce(arr, (prev, value) => prev + value, 0));
