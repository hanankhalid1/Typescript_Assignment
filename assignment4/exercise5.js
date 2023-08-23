// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
function grades(arr) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] < 50) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return arr;
}
var output = grades([20, 40, 60, 45, 70, 80, 90, 24]);
console.log("The remaining array is :  ".concat(output));
