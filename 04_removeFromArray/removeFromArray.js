/*
const removeFromArray = function(array, ...args) {
    let arg;
    for (arg of args) {
        if (array.includes(arg)) {
            array.splice(array.indexOf(arg), 1);
        }
    }
    return array;
};
*/
/*
The filter method works by passing each element of an array
by passing each element of an array through a test function.
This test function is the arrow function (!args.includes(item) 
in this case). Futhermore, this test function should return a 
boolean value. If the function returns true, that element is kept 
and included in the new array. If the function returns false, the 
element gets excluded (or filtered out).
*/
const removeFromArray = function(originalArray, ...args) {
    return originalArray.filter(item => !args.includes(item));
}
// Do not edit below this line
module.exports = removeFromArray;
