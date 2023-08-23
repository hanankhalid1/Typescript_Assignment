// - Write a rogram that uses a function to find the largest element in an array of numbers.
function largestNumber(arr) {
    var largeNumber = 0;
    for (var i = 0; i < arr.length; i++) {
        if (largeNumber < arr[i]) {
            largeNumber = arr[i];
        }
    }
    return largeNumber;
}
var x = largestNumber([23, 45, 56, 76, 23, 87, 95, 43, 21]);
console.log("The largest number is ".concat(x));
