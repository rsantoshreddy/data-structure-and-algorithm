// Bubble Sort
const bubbleSort = (array = []) => {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i;) {
            const next = j + 1;
            if (array[j] > array[next]) {
                [array[next], array[j]] = [array[j], array[next]]
            }
            j = next
        }
    }
    return array;
}

module.exports = bubbleSort;