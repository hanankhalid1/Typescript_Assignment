"use strict";
// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let array = [1, -2, -3, 4, 5];
let a = 0;
while (a < array.length) {
    if (array[a] < 0) {
        array.splice(a, 1);
    }
    else {
        a++;
    }
}
console.log(array);
