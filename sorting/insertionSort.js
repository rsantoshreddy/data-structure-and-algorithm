// Insertion Sort
const insertionSort = (array = []) => {
    for (let i = 1; i < array.length; i++) {
        const temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

const insertionSortCustom = function (cb) {
    for (let i = 1; i < this.length; i++) {
        const temp = this[i];
        let j = i - 1;
        while (j >= 0 && cb(this[j], temp)) {
            this[j + 1] = this[j];
            j--;
        }
        this[j + 1] = temp;
    }
    return this;
}

Array.prototype.insertionSortCustom = insertionSortCustom;

module.exports = insertionSort;
module.exports = insertionSortCustom;