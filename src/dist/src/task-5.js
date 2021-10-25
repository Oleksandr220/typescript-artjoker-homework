"use strict";
const memoFunction = (fn) => {
    let cache = {};
    return (number) => {
        if (number in cache) {
            console.log("Fatching from caheche", number);
            return cache[number];
        }
        else {
            let result = fn(number);
            cache[number] = result;
            return result;
        }
    };
};
const factorial = memoFunction((num) => {
    if (num === 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
});
// console.log(factorial(4));
// console.log(factorial(5));
