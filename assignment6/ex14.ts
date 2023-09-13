// 18- Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

let fvtPlace:string[] = ["Turkey" , "America" , "Saudia Arabia" , "Canada" , "Australia"];

// Print your array in its original order.

console.log(fvtPlace);

// Print your array in alphabetical order without modifying the actual list.

let sortedArray :string[]  = [...fvtPlace];
sortedArray.sort();
console.log(`The sorted Array is : ${sortedArray}`);

// Show that your array is still in its original order by printing it.

console.log(`The unsorted Array is : ${fvtPlace}`);

// Print your array in reverse alphabetical order without changing the order of the original list.

let reverseArray: string[] = [...fvtPlace];
reverseArray.sort((a, b) => b.localeCompare(a));
console.log(reverseArray);

// • Show that your array is still in its original order by printing it again.

console.log(`The unsorted Array is : ${fvtPlace}`);

// Reverse the order of your list. Print the array to show that its order has changed.

let reverserOrderArray: string[] = [...fvtPlace];
reverserOrderArray.reverse();
console.log(`The reverse Order array is : ${reverserOrderArray}`);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
reverserOrderArray.reverse();
console.log(`Again Reversed Array is : ${reverserOrderArray}`);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

let reversedAgainSorted: string[] = [...reverserOrderArray]

for(let i = 0 ; i <= reversedAgainSorted.length-1 ; i++){
    for(let j = i+1 ; j < reversedAgainSorted.length ; j++){
        if (reversedAgainSorted[i] > reversedAgainSorted [j]){
            let temp:string = reversedAgainSorted[i];
            reversedAgainSorted[i] = reversedAgainSorted[j];
            reversedAgainSorted[j] = temp;
        }
    }
}
console.log(` The again alpha Sorted : ${reversedAgainSorted}`);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let alphaReverersed:string[] = [...reverserOrderArray];
for(let i = 0 ; i <= alphaReverersed.length-1 ; i++){
    for(let j = i+1 ; j < alphaReverersed.length ; j++){
        if (alphaReverersed[i] < alphaReverersed [j]){
            let temp:string = alphaReverersed[i];
            alphaReverersed[i] = alphaReverersed[j];
            alphaReverersed[j] = temp;
        }
    }
}

console.log(`The again reversed Alphabatic order is : ${alphaReverersed}`);












