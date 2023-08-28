// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

let orignalArray:number[] = [3, 6, 9, 12, 15, 18];
console.log(`Orignal Array is : ${orignalArray}`);

let doubledArray = orignalArray
.filter((x) =>{return x % 2 !== 0})
.map((a) => {return a+a});
console.log(`Odd Doubled Array : ${doubledArray} `);

