// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
const arr:number[] = [1, 2, 3, 4];
console.log(`Orignal Array  : ${arr}`);

let newArr = arr.map((x)=>{
     return x*2});

     console.log(`New Multiplied Array : ${newArr}`);