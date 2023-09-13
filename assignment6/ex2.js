"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let nameOfPerson = "Hanan khalid";
let lowerCase = nameOfPerson.toLocaleLowerCase();
console.log(`Lower Case is : ${lowerCase}`);
let upperCase = nameOfPerson.toLocaleUpperCase();
console.log(`Upper Case is : ${upperCase}`);
let titleCase = nameOfPerson
    .split(' ')
    .map((word) => {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
})
    .join(' ');
console.log(`Title Case : ${titleCase}`);
