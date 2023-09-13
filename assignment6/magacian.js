// 41- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 42- Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// 43- Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicianList) {
    for (var i = 0; i < magicianList.length; i++) {
        console.log(magicianList[i]);
    }
}
function make_great(magicianList) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicianList.length; i++) {
        modifiedMagicians.push("the Great " + magicianList[i]);
    }
    return modifiedMagicians;
}
var magicians = ["Khubaib", "Ahmar", "Affan", "Hammad"];
// Create a copy of the original array and modify it
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Display the original array
console.log("Original Magician Names:");
show_magicians(magicians);
// Display the modified copy
console.log("\nModified Magician Names:");
show_magicians(greatMagicians);
// Display the original array to confirm it remains unchanged
console.log("\nOriginal Magician Names (Unchanged):");
show_magicians(magicians);
