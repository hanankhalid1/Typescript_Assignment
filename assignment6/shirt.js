//36-  T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    return "The size of shirt is :  ".concat(size, " and text you want is : ").concat(text, ".");
}
var shirt = make_shirt(20, "Hello World!");
console.log(shirt);
// 37- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love TypeScript."; }
    return "The size of shirt is  : ".concat(size, " and text you want is :  ").concat(text, ".");
}
;
console.log(make_shirts());
console.log(make_shirts("medium"));
console.log(make_shirts("small", "Ye to Hoga"));
