// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = ["Ali", "Khubaib", "Ahmad", "Akbar", "Umer", "Hammad"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["Hanan", "khubaib", "Ahmad", "Majid", "Ehtisham", "Hassan"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// Convert current_users to lowercase for case-insensitive comparison
for (var i = 0; i < new_users.length; i++) {
    var usernameExists = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("The username ".concat(new_users[i], " already exists."));
    }
    else {
        console.log("".concat(new_users[i], " is available."));
    }
}
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
