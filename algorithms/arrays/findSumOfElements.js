arr = [9, 9, 2, 10, 2, 3, 1, 0, 20];
(k = 4), (sum = 30);

function getSum(arr, k, sum) {
  if (k < arr.length) {
    let accumulator = 0;
    for (let index = 0; index < arr.length; index++) {
      accumulator =
        accumulator + arr[index] - (arr[index - k] ? arr[index - k] : 0);

      if (accumulator === sum && index >= k - 1) {
        return arr.slice(index - (k - 1), index + 1);
      }
    }
  }

  return 'Not found';
}
getSum(arr, k, sum);
