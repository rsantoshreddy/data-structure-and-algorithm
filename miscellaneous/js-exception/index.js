const parentException = function () {
  let a = 10;
  try {
    a = 20;
    let c = a / 0; // Infinity==> will not through exception
    add(a, c); // Error: add is not defined and through exception
  } catch (e) {
    console.log(e);
    console.log(a);
  }
  console.log(a);
  return a;
};
