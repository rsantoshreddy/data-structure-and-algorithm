const quickSort = (array) => {
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


const quickSortProto = function (left = 0, right = this.length - 1) {
    if (right <= left) { return; }
    let i = left;
    let j = right - 1
    const pivot = this[right];
    while (true) {
        while (this[i] < pivot) { i++ }
        while (j > 0 && this[j] >= pivot) { j-- }
        if (i >= j) {
            break;
        } else {
            [this[i], this[j]] = [this[j], this[i]]
        }
    }

    [this[i], this[right]] = [this[right], this[i]];

    this.quickSortProto(left, i - 1);
    this.quickSortProto(i + 1, right);

    return this;


}

// Array.prototype.quickSort = quickSort;
// const d = [3, 10, 1, 5, 6, 10, 11, 10, -1];
// console.log(d.quickSort());

var qs = function (left = 0, right = this.length - 1) {
    if (right <= left) { return; }

    var i = left;
    var j = right - 1;
    var pivot = this[right];

    while (true) {
        while (this[i] < pivot) { i++; }
        while (j > 0 && this[j] >= pivot) { j--; }
        if (i >= j) {
            break;
        } else {
            [this[i], this[j]] = [this[j], this[i]]
        }
    }
    [this[i], this[right]] = [this[right], this[i]];

    this.qs(left, i - 1);
    this.qs(i + 1, right);

    return this;
}