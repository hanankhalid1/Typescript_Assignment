// Write a program that uses filter to remove all negative numbers from an array of numbers
function PositiveNum(array) {
    return array.filter(function (a) { return a > 0; });
}
var postNum = PositiveNum([1, -2, 3, -34, -54, 65, 78, -123, 54, -12]);
console.log(postNum);
