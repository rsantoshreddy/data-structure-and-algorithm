const performanceChecker = require('../../performanceChecker');
const findMaxSumSubArray = require('./divideAndConquer');
const kadansMaxSumSubArray = require('./kadansMaxSumSubArray');

const data = [-2, -3, 4, -1, -2, 1, 5, -3];

performanceChecker(findMaxSumSubArray, [...data], 'divideAndConquer');
performanceChecker(kadansMaxSumSubArray, [...data], 'kadansMaxSumSubArray');

// divideAndConquer 0.25632200005929917
// kadansMaxSumSubArray 0.08982100000139326