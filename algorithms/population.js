const getHighestPopulation = (birth, death) => {
  let populationMap = new Map();

  birth.forEach((b) => {
    const currentBirth = populationMap.get(b);
    if (currentBirth) {
      populationMap.set(b, currentBirth + 1);
    } else {
      populationMap.set(b, 1);
    }
  });

  death.forEach((d) => {
    const pop = populationMap.get(d);
    if (pop !== undefined) {
      populationMap.set(d, pop - 1);
    } else {
      populationMap.set(d, -1);
    }
  });

  populationMap = new Map([...populationMap].sort((a, b) => a[0] - b[0]));

  const years = [...populationMap.keys()];
  let cummilativeMax = 0;
  let maxResult = { year: years[0], population: populationMap.get(years[0]) };

  years.forEach((year) => {
    cummilativeMax += populationMap.get(year);
    if (cummilativeMax > maxResult['population']) {
      maxResult = { year: year, population: cummilativeMax };
    }
  });

  return maxResult;
};

var birth = [1981, 1984, 1984, 1991, 1996];
var death = [1983, 1984, 1991];

getHighestPopulation(birth, death);
