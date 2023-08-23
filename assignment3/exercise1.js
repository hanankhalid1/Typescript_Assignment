function CreateArray(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
var arr = [1, 2, 3, 4, 5];
var indexPlace = 2;
var valueToBeInserted = 10;
var result = CreateArray(arr, indexPlace, valueToBeInserted);
console.log(result);
