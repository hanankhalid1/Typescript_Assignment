// - Write a rogram that uses a function to find the largest element in an array of numbers.

function largestNumber(arr:number[]):number{
    let largeNumber:number = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if (largeNumber < arr[i]){
            largeNumber= arr [i];
    }
    
}
return largeNumber;
}
let x = largestNumber([23 ,45 ,56 ,76 ,23 ,87 ,95 ,43,21]);
console.log(`The largest number is ${x}`);
