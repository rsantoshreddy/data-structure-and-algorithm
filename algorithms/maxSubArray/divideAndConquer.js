/*
    Pseudo code reference CLRS page:71
*/

function findMaxSumCrossArray(array, low, mid, high) {
    let leftHigh = mid;
    let sum = leftSum = array[leftHigh];

    for (let i = mid - 1; i >= low; i--) {
        sum += array[i];
        if (sum >= leftSum) {
            leftSum = sum;
            leftHigh = i;
        }
    }

    // elements on right of mid
    let rightHigh = mid + 1;
    sum = rightSum = array[rightHigh];
    for (let i = mid + 2; i <= high; i++) {
        sum += array[i];
        if (sum >= rightSum) {
            rightSum = sum;
            rightHigh = i;
        }
    }
    return { low: leftHigh, high: rightHigh, maxSum: leftSum + rightSum };
}

function findMaxSumSubArray(array = [], low = 0, high = array.length - 1) {
    if (high <= low) {
        return array[low];
    }
    const mid = Math.floor((low + high) / 2);

    const { low: leftLow, high: leftHigh, maxSum: leftMaxSum } = findMaxSumSubArray(array, low, mid);
    const { low: rightLow, high: rightHigh, maxSum: rightMaxSum } = findMaxSumSubArray(array, mid + 1, high);
    const { low: crossLow, high: crossHigh, maxSum: crossMaxSum } = findMaxSumCrossArray(array, low, mid, high);

    if (leftMaxSum >= rightMaxSum && leftMaxSum >= crossMaxSum) {
        return { low: leftLow, high: leftHigh, maxSum: leftMaxSum };
    } else if (rightMaxSum >= leftMaxSum && rightMaxSum >= crossMaxSum) {
        return { low: rightLow, high: rightHigh, maxSum: rightMaxSum };
    } else {
        return { low: crossLow, high: crossHigh, maxSum: crossMaxSum };
    }

}

module.exports = findMaxSumSubArray;