// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let nameOfPerson:string = "Hanan khalid";
let lowerCase: string  = nameOfPerson.toLocaleLowerCase();
console.log(`Lower Case is : ${lowerCase}`);
let upperCase:string = nameOfPerson.toLocaleUpperCase();
console.log(`Upper Case is : ${upperCase}`);

let titleCase: any = nameOfPerson
  .split(' ')
  .map((word) => {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
  })
  .join(' ');

console.log(`Title Case : ${titleCase}`);


