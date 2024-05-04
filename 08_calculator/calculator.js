const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => (total + item), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => (total * item));
};

const power = function(a, b) {
  return Math.pow(a, b);
  // alternative to Math.pow
	return a ** b;
};

const factorial = function(a) {
  let fact = 1;
	for (let i = a; i > 1; i--) {
    fact *= i;
  }
  return fact;
};

// alternative to factorial
// const factorial = function(a) {
//   if (a === 0) {
//     return 1;
//   } else {
//     return a * factorial(a - 1);
//   }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
