const sumAll = function(num1, num2) {
    if (!(typeof num1 === "number" && 
          typeof num2 === "number")) {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let smallNum = num1 < num2 ? num1 : num2;
    let largeNum = num1 > num2 ? num1 : num2;

    let fibSmall = Math.floor((smallNum) * (smallNum + 1) / 2);
    let fibLarge = Math.floor((largeNum) * (largeNum + 1) / 2);

    return fibLarge - fibSmall + smallNum
    

};

// const sumAll = function(num1, num2) {
//     if (!(typeof num1 === "number" && 
//           typeof num2 === "number")) {
//         return "ERROR";
//     }
//     if (num1 < 0 || num2 < 0) {
//         return "ERROR";
//     }

//     let finalSum = 0;
//     let smallNum = num1 < num2 ? num1 : num2;
//     let largeNum = num1 > num2 ? num1 : num2;
    
//     for (let i = smallNum; i <= largeNum; i++) {
//         finalSum += i;
//     }
//     return finalSum;

// };

// Do not edit below this line
module.exports = sumAll;
