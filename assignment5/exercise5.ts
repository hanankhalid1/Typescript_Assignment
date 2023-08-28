// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

const tempInCelcius: number[] = [0, 10, 20, 30, 40];

let tempInFahrenhiet =  tempInCelcius.map((x) => {
   return  (x * 9/5) + 32;
});

console.log(tempInFahrenhiet);

