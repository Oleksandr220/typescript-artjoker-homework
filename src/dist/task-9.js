"use strict";
const arr = [2, 4, 6, 5, 8, 9, 2, 1, 12];
Array.prototype.ownForEach = function (callBack) {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i);
    }
};
Array.prototype.ownMap = function (callBack) {
    let res = [];
    for (let i = 0; i <= this.length - 1; i++) {
        res[i] = callBack(this[i], i);
    }
    return res.splice(0, this.length);
};
Array.prototype.ownFillter = function (callBack) {
    let res = [];
    for (let i = 0; i <= this.length - 1; i++) {
        if (callBack(this[i], i)) {
            res.push(this[i]);
        }
    }
    return res;
};
Array.prototype.ownReduce = function (callBack, acc) {
    let res = acc || 0;
    for (let i = 0; i <= this.length - 1; i++) {
        res = callBack(this[i], res);
    }
    return res;
};
Array.prototype.ownEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i)) {
            return false;
        }
    }
    return true;
};
Array.prototype.ownSome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            return false;
        }
    }
    return true;
};
