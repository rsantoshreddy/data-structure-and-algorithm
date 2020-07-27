const { performance } = require('perf_hooks');

const performanceChecker = (operation, operand, operationName) => {
    const t0 = performance.now()
    const results = operation(operand);
    const t1 = performance.now();
    // console.table({
    //     Operator: operationName,
    //     Operand: `${operand}`,
    //     Time: t1 - t0,
    //     Results: `${results}`
    // });
    console.log(operationName, t1 - t0)
}

module.exports = performanceChecker;

