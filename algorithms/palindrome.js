const isPalindrome = (word) => {
    let isPalindrome = true;
    let { length } = word;

    for (let index = 0; index <= length; index++) {
        if (word[index] !== word[--length]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};
