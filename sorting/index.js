const performanceChecker = require('../performanceChecker');
const basicSort = array => array.sort((x, y) => x - y);
const { quickSort, inlineQuickSort } = require('./quickSort');
const mergeSort = require('./mergeSort');

const suffleArray = require('../suffling/suffling');

const input = suffleArray(Array.from({ length: 10 }, (v, i) => i));

performanceChecker(quickSort, [...input], 'Quick Sort');
performanceChecker(inlineQuickSort, [...input], 'Inline Quick Sort');
performanceChecker(mergeSort, [...input], 'Merge Sort');
performanceChecker(basicSort, [...input], 'Basic Sort');

