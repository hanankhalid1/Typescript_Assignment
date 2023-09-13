// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(name, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(name, " is in ").concat(country, ".");
}
console.log(describe_city("Lahore"));
console.log(describe_city("Faisalabad"));
console.log(describe_city("Delhi", "India"));
