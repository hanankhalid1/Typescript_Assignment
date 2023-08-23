"use strict";
var temperature = 26;
var fahrenheit = 0;
var calcius = 0;
// Converting calcius To fahrenheit
fahrenheit = (temperature * 9 / 5) + 32;
console.log(`Temperature in fahrenheit is ${fahrenheit} F`);
// Converting fahreinheit to calcius
calcius = (temperature - 32) * 5 / 9;
console.log(`Temperature in calcius is ${calcius} C`);
