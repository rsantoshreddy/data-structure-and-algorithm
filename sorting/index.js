const performanceChecker = require('../performanceChecker');
const basicSort = array => array.sort((x, y) => x - y);
const { quickSort, inlineQuickSort } = require('./quickSort');
const mergeSort = require('./mergeSort');

const suffleArray = require('../suffling/suffling');

const input = suffleArray(Array.from({ length: 10 }, (v, i) => i));
// console.log(input);
performanceChecker(quickSort, [...input], 'Quick Sort');
// console.log(input);
performanceChecker(inlineQuickSort, [...input], 'Inline Quick Sort');
// console.log(input);
performanceChecker(mergeSort, [...input], 'Merge Sort');
// console.log(input);
performanceChecker(basicSort, [...input], 'Basic Sort');

