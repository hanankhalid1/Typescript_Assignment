// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

function areaOfCircle(radius : number) : number{
    return Math.round(Math.PI * radius ** 2);
}

let r1 = 10;
console.log(`The area of Circle is  ${areaOfCircle(r1)}`);
