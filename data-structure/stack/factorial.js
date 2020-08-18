
// num E N: num belongs to natural numbers
const factorial = (num) => {
    if (num === 0) return 1;
    if (num < 0) throw 'Number should be natural number';
    let factorial = num;
    while (num > 1) {
        factorial = factorial * --num;
    }
    return factorial;
};
