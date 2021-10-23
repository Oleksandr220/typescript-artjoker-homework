function transMatrix(matrix) {
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

const matrixA = [];

console.log(transMatrix(matrixA));

function SumMatrix(matrixA, matrixB) {
  let matrixC = [];
  for (let i = 0; i < matrixA.length; i++) {
    matrixC[i] = [];
    for (let j = 0; j < matrixA.length; j++) {
      matrixC[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }
  return matrixC;
}

const matrixB = [
  [4, 5, 6],
  [1, 3, 3],
  [-1, 1, 0],
];

// console.log(SumMatrix(matrixA, matrixB));
