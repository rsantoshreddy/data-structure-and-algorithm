/*
1. all primes are of the form 6k ± 1, with the exception of 2 and 3 where k is some integer
2. if the square root of n is not a prime number, n is not a prime number
*/
const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const primeFactors = (n) => {
  while (n % 2 === 0) {
    console.log(2);
    n = n / 2;
  }
  for (let i = 3; i * i <= n; i = i + 2) {
    while (n % i === 0) {
      console.log(i);
      n = n / i;
    }
  }

  if (n > 2) {
    console.log(n);
  }
};
