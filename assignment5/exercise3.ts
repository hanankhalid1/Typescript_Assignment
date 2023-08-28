// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

const fruits:string[] = ["apple", "banana", "cherry", "date", "grape"];
console.log(`Orignal array of Fruits : ${fruits}`);

let filteredArray: string[] = fruits.filter((item) => {
    if(item.length > 5){
        return item;
    }
});
 console.log("Filtered Array of Fruits : ", filteredArray);

