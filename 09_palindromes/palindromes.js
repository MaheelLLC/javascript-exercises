const palindromes = function (string) {
    let left = 0;
    let right = string.length - 1;
    let punctuation = " .,'!?";
    while (left < right) {
        while (punctuation.includes(string[left])) {
            left += 1;
        }
        while (punctuation.includes(string[right])) {
            right -= 1;
        }
        if (string[left].toLowerCase() !== string[right].toLowerCase()) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
};

// Alternative
const palindromes2 = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-z]/g, '');
    return cleanString.split('').reverse().join('') === cleanString;
};

// Do not edit below this line
module.exports = palindromes;
