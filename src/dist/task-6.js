"use strict";
function getTranspositionsMatrix(matrix) {
    let matrixTransposition = [];
    if (matrix.length === 0) {
        return matrixTransposition;
    }
    for (let i = 0; i < matrix[0].length; i++) {
        matrixTransposition[i] = [];
        for (let j = 0; j < matrix.length; j++)
            matrixTransposition[i][j] = matrix[j][i];
    }
    return matrixTransposition;
}
function getSumMatrix(matrixA, matrixB) {
    let matrixResulting = [];
    for (let i = 0; i < matrixA.length; i++) {
        matrixResulting[i] = [];
        for (let j = 0; j < matrixA.length; j++) {
            matrixResulting[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return matrixResulting;
}
