// - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function sum(array) {
    var i = 0;
    var sum = 0;
    while (i < array.length) {
        sum = sum + array[i];
        i++;
    }
    return sum;
}
console.log(sum([1, 2, 3, 2, 2]));