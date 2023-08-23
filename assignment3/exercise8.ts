// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

var tempInCelcius: number[] = [];

function tempCovertor(tempInCelcius: any) {
    for (var i = 0; i < tempInCelcius.length; i++) {
        var farhenTemp = (9 / 5) * tempInCelcius[i] + 32;
        tempInCelcius[i] = farhenTemp;
    }
    return tempInCelcius;
}

var res = tempCovertor([100, 23, 46, 67]);
console.log(res);