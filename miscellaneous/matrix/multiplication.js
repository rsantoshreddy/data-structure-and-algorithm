

const A = [
    [1, 2, 3, 4],
    [2, 3, 4, 1],
    [3, 4, 1, 2],
    [4, 1, 2, 3],
];

const B = [
    [1, 2, 3, 4],
    [2, 3, 4, 1],
    [3, 4, 1, 2],
    [4, 1, 2, 3],
];

const matrixMultiplication = (A, B) => {
    const C = [];
    for (let i = 0; i < A.length; i++) {
        C[i] = new Array(B[i].length);

        for (let j = 0; j < B[i].length; j++) {
            let c = 0;
            for (let k = 0; k < B.length; k++) {
                c = c + A[i][k] * B[k][j];
            }
            C[i][j] = (c);
        }
    }
    return C;
};

console.log(matrixMultiplication(A, B));

