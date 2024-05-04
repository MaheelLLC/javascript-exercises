const fibonacci = function(num) {
    if (typeof num !== "number") {
        num = Number(num);
    }
    if (num < 0) {
        return "OOPS";
    }
    if (num == 0) {
        return 0;
    }
    let first = 1;
    let second = 1;
    for (let i = 2; i < num; i++) {
        let current = first + second;
        first = second;
        second = current;
    }
    return second;

};

// Do not edit below this line
module.exports = fibonacci;
