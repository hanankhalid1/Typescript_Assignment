// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius) {
    return Math.round(Math.PI * Math.pow(radius, 2));
}
var r1 = 10;
console.log("The area of Circle is  ".concat(areaOfCircle(r1)));
