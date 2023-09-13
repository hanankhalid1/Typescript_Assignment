// 29- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
var fruits = ["Banana", "Orange", "Apple", "Mango", "Cherry"];
function checkFruitPresence(fruit) {
    return fruits.indexOf(fruit) !== -1;
}
if (checkFruitPresence("Banana")) {
    console.log("Banana is present");
}
if (checkFruitPresence("Orange")) {
    console.log("Orange is present");
}
if (checkFruitPresence("Apple")) {
    console.log("Apple is present");
}
if (checkFruitPresence("Mango")) {
    console.log("Mango is present");
}
if (checkFruitPresence("Cherry")) {
    console.log("Cherry is present");
}
// • Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ["Banana", "Apple", "Cherry"];
console.log(favorite_fruits);
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (checkFruitPresence("Banana")) {
    console.log("I really like Bananas");
}
if (checkFruitPresence("Orange")) {
    console.log("I really like Oranges");
}
if (checkFruitPresence("Apple")) {
    console.log("I really like Apple");
}
if (checkFruitPresence("Mango")) {
    console.log("I really like Mango");
}
if (checkFruitPresence("Cheryy")) {
    console.log("I really like cherry");
}
