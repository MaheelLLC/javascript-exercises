const reverseString = function(word) {
    word = word.split('');
    word.reverse();
    word = word.join('');
    return word;
};

// Do not edit below this line
module.exports = reverseString;
