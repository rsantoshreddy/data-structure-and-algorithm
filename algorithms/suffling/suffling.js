// const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const suffleArray = (array = []) => {
    for (let index = array.length - 1; index > 0; index--) {
        const randomNumber = Math.floor(Math.random() * Math.floor(index));
        [array[index], array[randomNumber]] = [array[randomNumber], array[index]]
    }
    return array;
}

module.exports = suffleArray;