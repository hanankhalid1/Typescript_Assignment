"use strict";
var totalDays = 48;
if (totalDays >= 0) {
    var weeks = Math.floor(totalDays / 7);
    var remainingDays = totalDays % 7;
    console.log(`${totalDays} days = ${weeks} weeks and ${remainingDays} days`);
}
else {
    console.log("Invalid input. Please enter a non-negative number of days.");
}
