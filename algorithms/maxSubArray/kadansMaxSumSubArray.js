const kadansMaxSumSubArray = (a = []) => {
    const { length } = a;
    if (!length) return 0;
    let start = end = 0;
    let currentMax = resultMax = a[start];

    for (let i = 1; i < length; i++) {
        currentMax = Math.max(currentMax + a[i], a[i]);

        if (currentMax > resultMax) {
            if (currentMax === a[i]) {
                start = i;
            }
            resultMax = currentMax;
            end = i;
        }
    }
    return { start, end, resultMax }
}

module.exports = kadansMaxSumSubArray;