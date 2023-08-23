var temperature:number=26;
var fahrenheit:number=0;
var calcius:number=0;

// Converting calcius To fahrenheit
fahrenheit=(temperature * 9/5) + 32;
console.log(`Temperature in fahrenheit is ${fahrenheit} F`);

// Converting fahreinheit to calcius
calcius=(temperature - 32) * 5/9;
console.log(`Temperature in calcius is ${calcius} C`);