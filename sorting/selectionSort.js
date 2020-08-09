// worst case time complexity O(n^2)

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {

        let min = i;
        let j = i + 1;
        while (j < array.length) {
            if (array[j] < array[min]) {
                min = j;
            }
            j++
        }

        if (i !== min) {
            [array[i], array[min]] = [array[min], array[i]]
        }

    }
}

module.exports = selectionSort;