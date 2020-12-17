const arr = [1, 2, 3, 4, 5]; //9

const findTwoElementsSum = (arr, weight) => {
  const hasTable = {
    8: 1,
  };

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const difference = weight - currentElement;

    if (hasTable[difference] !== undefined) {
      return [i, hasTable[currentElement]];
    } else {
      hasTable[difference] = i;
    }
  }
};
