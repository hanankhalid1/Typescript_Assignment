"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guest = ["Akram", "Aslam", "Anwar"];
guest.forEach((person) => {
    console.log(`Hello ${person} you have been invited to party.`);
});
console.log(`Mr ${guest[1]} can't make the dinner due to personal reasons.`);
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guest.splice(1, 1, "Asghar");
console.log(guest);
// Print a second set of invitation messages, one for each person who is still in your list.
guest.forEach((person) => {
    console.log(`Hello ${person} you have been invited to party.`);
});
//  16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
guest.forEach((person) => {
    console.log(`Hello ${person} you have been invited to party. We have a found a bigger dinner table.`);
});
// Add one new guest to the beginning of your array.
guest.unshift("Affan");
console.log(guest);
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list
guest.splice(2, 0, "Hassan"); //middle of array
console.log(guest);
guest.push("Khubaib");
guest.forEach(person => {
    console.log(`Hello ${person} you have been invited to party`);
});
// 17- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
guest.forEach(person => {
    console.log(`Hello ! ${person} sorry for disturbance I can invite only two persons`);
});
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guest.length > 2) {
    let removedGuest = guest.pop();
    if (removedGuest) {
        console.log(`Sorry ! Mr ${removedGuest} You are no longer invited to dinner.`);
    }
}
console.log(`The final list is : ${guest}`);
// Print a message to each of the two people still on your list, letting them know they’re still invited.
guest.forEach(person => {
    console.log(`Hello Mr ${person} You are stil invited to the dinner.`);
});
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (let i = 0; i <= guest.length; i++) {
    guest.pop();
}
console.log(`The final empty list is ${guest}`);
// 19- Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`The number of invited people are : ${guest.length}`);
