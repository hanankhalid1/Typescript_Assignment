"use strict";
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//  1-Test
let age = 18;
console.log("Isage == 18 ? I predict True");
console.log(age === 18);
//  2-Test
let color = "Black";
console.log("IsColor == 'Black' ? I predict True");
console.log(color === "Black");
//  3-Test
let price = 2000;
console.log("IsPrice == 2000 ? I predict True");
console.log(price === 2000);
//  4-Test
let legs = 2;
console.log("haveLegs == 2 ? I predict True");
console.log(legs === 2);
//  5-Test
let numOfDoors = 3;
console.log("numOfDoors == 3 ? I predict True");
console.log(numOfDoors === 3);
//  6-Test
let noOfPencil = 5;
console.log("numOfPencils === 2 ? I predict False");
console.log(noOfPencil === 2);
//  7-Test
let model = "Samsung";
console.log("model == Infinix ? I predict false");
console.log(model === "nfinix");
//  8-Test
let size = "12px";
console.log("size == 10px ? I predict false");
console.log(size === "10px");
//  9-Test
let distance = 1000;
console.log("distance == 12000 ? I predict false");
console.log(distance === 12000);
//  10-Test
let flowerColor = "Green";
console.log("FlowerColor == red ? I predict false");
console.log(model === "red");
// 24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let equalString = "Lahore";
if (equalString === "Lahore") {
    console.log("Equal : " + true);
}
let unequalString = "Lahore";
if (unequalString !== "Multan") {
    console.log("Unequal : " + false);
    // condition
}
// • Tests using the lower case function
let result = equalString.toLowerCase();
if (result === "Lahore") {
    console.log(true);
}
else {
    console.log(false);
}
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
let num1 = 5;
let num2 = 6;
if (num1 === 5 && num2 === 6) {
    console.log(`Both numbers are true`);
}
else if (num1 === 5 || num2 === 8) {
    console.log('One of them is true');
}
else if (num1 !== 4 && num2 !== 2) {
    console.log('None of these two conditions are true');
}
else if (num1 > num2) {
    console.log("First number is less Second Number Is greater");
}
else if (num1 < num2) {
    console.log(" first number is greater and Second Number Is Less");
}
else if (num1 >= num2) {
    console.log(`first number is greater or Equal to second`);
}
else if (num1 <= num2) {
    console.log(`second number is Greater Or Equal To First `);
}
else {
    "invalid!!!";
}
// • Test whether an item is in a array
// • Test whether an item is not in a array
let arrayOfnumber = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arrayOfnumber.length; i++) {
    if (arrayOfnumber[i] === 4) {
        console.log(`${arrayOfnumber[i]} is present at index ${i}`);
    }
}
// • Test whether an item is not in a array
let arrayOfnumbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arrayOfnumbers.length; i++) {
    if (arrayOfnumbers[i] !== 11) {
        console.log(`the item is not present`);
        break;
    }
}
