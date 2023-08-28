// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
var arrOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Orignal Array : ".concat(arrOfNumber));
var finalArray = arrOfNumber
    .filter(function (x) { return x % 2 === 0; })
    .map(function (a) {
    return a * a;
});
console.log("Squared Number Array is : ".concat(finalArray));
