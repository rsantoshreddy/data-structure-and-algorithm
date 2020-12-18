const findFactors = (n) => {
  const factors = [1];

  for (let index = 2; index * index <= n; index++) {
    if (n % index === 0) {
      factors.push(index);
      if (index * index !== n) {
        factors.push(n / index);
      }
    }
  }

  factors.push(n);

  return factors;
};
