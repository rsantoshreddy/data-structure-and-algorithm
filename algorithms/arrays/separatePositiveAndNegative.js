var a = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

const setOrders = (a) => {
  let start = 0;
  let end = a.length - 1;
  while (start <= end) {
    while (a[start] < 0 && start <= end) {
      start++;
    }

    while (a[end] > 0 && start <= end) {
      end--;
    }
    if (start <= end) {
      [a[start], a[end]] = [a[end], a[start]];
    }
  }
};
