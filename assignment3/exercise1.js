"use strict";
// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function CreateArray(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
const arr = [1, 2, 3, 4, 5];
const indexPlace = 2;
const valueToBeInserted = 10;
const result = CreateArray(arr, indexPlace, valueToBeInserted);
console.log(result);
