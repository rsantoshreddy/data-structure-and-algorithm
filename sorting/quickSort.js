﻿const quickSort = (array) => {
    const { length } = array;
    if (length <= 1) {
        return array;
    }
    const pivot = array.pop();

    const leftPart = [];
    const rightPart = [];

    for (let i = 0; i < length; i++) {
        if (array[i] < pivot) {
            leftPart.push(array[i]);
        }
        if (array[i] >= pivot) {
            rightPart.push(array[i])
        }
    }

    return [...quickSort(leftPart), pivot, ...quickSort(rightPart)]
}


const inlineQuickSort = (array, left = 0, right = array.length - 1) => {
    if (right - left <= 0) {
        return;
    }
    const pivot = array[right];

    let i = left;
    let j = right - 1;

    while (true) {
        while (array[i] < pivot) { i++ }
        while (j > 0 && array[j] > pivot) { j--; }

        if (i >= j) { break };
        ([array[i], array[j]] = [array[j], array[i]])
    }

    [array[i], array[right]] = [array[right], array[i]];

    inlineQuickSort(array, left, i - 1);
    inlineQuickSort(array, i + 1, right);

    return array;
}
module.exports = { quickSort, inlineQuickSort };


