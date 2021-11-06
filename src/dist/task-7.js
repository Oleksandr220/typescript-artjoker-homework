"use strict";
let matrixFirst = [
    [4, 7, 0],
    [5, 3, 7],
    [5, 2, 2],
];
function deleteRow(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j of matrix[i]) {
            if (j == 0) {
                matrix.splice(i, 1);
                i--;
            }
        }
    }
    return matrix;
}
function matrixRes(index, matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].splice(index, 1);
    }
    return matrix;
}
function deleteColumn(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                let index = matrix[i].indexOf(matrix[i][j]);
                matrixRes(index, matrix);
            }
        }
    }
    return matrix;
}
