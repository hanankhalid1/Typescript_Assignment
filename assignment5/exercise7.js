// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
var arrayOfNmaes = ["Alice", "Bob", "Charlie", "David", "Emily"];
arrayOfNmaes.forEach(function (names) {
    console.log("".concat(names, "!"));
});
console.log(arrayOfNmaes);
