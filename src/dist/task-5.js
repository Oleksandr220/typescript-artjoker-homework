"use strict";
const memoizedNumber = (fn) => {
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
const factorial = memoizedNumber((number) => {
    if (number === 0) {
        return 1;
    }
    else {
        return number * factorial(number - 1);
    }
});
