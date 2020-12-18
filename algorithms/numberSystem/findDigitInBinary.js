const findDigitsInBinary = function (A) {
  const r = [];
  if (A < 1) {
    return A;
  }
  while (A > 0) {
    r.unshift(A % 2);
    A = Math.floor(A / 2);
  }

  return r.join('');
};
