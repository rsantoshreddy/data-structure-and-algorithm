
// Merge Sort
const merge = (left, right) => {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    return [...result, ...left, ...right];
}

const mergeSort = (array = []) => {
    if (array.length < 2) {
        return array
    }
    const mid = (array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;