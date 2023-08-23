// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(num) {
    var i = 1;
    var fact = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var f = factorial(4);
console.log(f);
