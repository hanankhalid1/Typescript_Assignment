// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

function PrintEven(arr: number[]): number[] { 
    let resultArray: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultArray.push(arr[i]);
        }
    }

    return resultArray;
}

let result = PrintEven([0,1,2,3,4,5,6,7,8,9,10]);
console.log(result);

