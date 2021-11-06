"use strict";
const memoFunction = (fn) => {
    let cache = {};
    return (number) => {
        if (number in cache) {
            return cache[number];
        }
        let result = fn(number);
        cache[number] = result;
        return result;
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
