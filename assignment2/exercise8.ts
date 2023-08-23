var units: number = 272;
var perUnitPrice:number=21.88;
var billAmount:number=units*perUnitPrice;
var taxper: number = 0;
if (units > 500) {
  taxper = 25;
} else if (units > 200) {
  taxper = 15;
} else if (units > 100) {
  taxper = 10;
} else {
  taxper = 0;
}

var taxAmount = (taxper / 100) * billAmount;
var bill = billAmount + taxAmount;

console.log(`Units consumed: ${units}`);
console.log(`Tax percent: ${taxper}%`);
console.log(`Tax amount: ${taxAmount}`);
console.log(`Total bill amount: ${bill}`);
