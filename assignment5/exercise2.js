// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
var arr = [1, 2, 3, 4];
console.log("Orignal Array  : ".concat(arr));
var newArray = arr.map(function (x) {
    return x * 2;
});
console.log("New Multiplied Array : ".concat(newArray));
