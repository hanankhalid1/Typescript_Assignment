// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizzas = ["Margherita", "Pepperoni", "fajita"];
for (var i = 0; i < pizzas.length; i++) {
    console.log("".concat(pizzas[i]));
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
pizzas.map(function (item) {
    console.log("I lke ".concat(item, " pizza"));
});
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("Pizzas are of great taste and instact remedy of hunger. I love every kind of Pizza and its dow espacially so whenever me and my friends are planning of outing we definatily go for pizzas and thus I really love pizza!");