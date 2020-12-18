// sieve of Eratosthenes

const primeNumbers = (n) => {
  const a = Array(n).fill(1);
  a[0] = 0;
  a[1] = 0;
  for (let index = 2; index * index < n; index++) {
    if (a[index] === 1) {
      for (let j = 2; j * index < n; j++) {
        a[index * j] = 0;
      }
    }
  }
  const result = [];

  for (let index = 0; index < a.length; index++) {
    if (a[index] === 1) {
      result.push(index);
    }
  }
  return result;
};
