"use strict";
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// my name is : Hanan Khalid
// my rollnumber is : 9/6/2023
// This progam is removing whitespace character from begning and end of thr string.
let n = "\tHanan Khalid\n";
console.log(`Unstripped Name is: ${n}`);
let stripped = n.trim();
console.log(`Stripped Name is: ${stripped}`);
