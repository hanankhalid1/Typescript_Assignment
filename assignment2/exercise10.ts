var totalDays:number=48;
if(totalDays>=0)
{
    var weeks:number=Math.floor(totalDays/7);
    var remainingDays:number=totalDays%7;
    console.log(`${totalDays} days = ${weeks} weeks and ${remainingDays} days`);
}
else{
    console.log("Invalid input. Please enter a non-negative number of days.");
}