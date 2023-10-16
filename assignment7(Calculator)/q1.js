import inquirer from "inquirer";
// async function calculateGrade() {
//     let result = await inquirer.prompt([
//         {
//             type: "number",
//             name: "marks",
//             message: "Enter your Marks: "
//         }
//     ]);
//     if (result.marks >= 0 && result.marks < 50) {
//         console.log("Your Grade is D");
//     }
//     else if (result.marks >= 50 && result.marks < 60) {
//         console.log("Your grade is C");
//     }
//     else if (result.marks >= 60 && result.marks < 70) {
//         console.log("Your grades are B");
//     }
//     else if (result.marks >= 70 && result.marks < 80) {
//         console.log("You got A");
//     }
//     else if (result.marks >= 80 && result.marks <= 100) {
//         console.log("You got A+");
//     }
//     else {
//         console.log('Invalid input');
//     }
// }
// calculateGrade();
async function gradeSystem() {
    try {
        const answer = await inquirer.prompt([
            {
                type: "number",
                name: "marks",
                message: "Enter your Marks: "
            }
        ]);
        if (answer.marks > 100 || answer.marks < 0) {
            throw Error("Enter Correct Marks");
        }
        else if (answer.marks >= 0 && answer.marks < 50) {
            console.log("Your Grade is D");
        }
        else if (answer.marks >= 50 && answer.marks < 60) {
            console.log("Your grade is C");
        }
        else if (answer.marks >= 60 && answer.marks < 70) {
            console.log("Your grades are B");
        }
        else if (answer.marks >= 70 && answer.marks < 80) {
            console.log("You got A");
        }
        else if (answer.marks >= 80 && answer.marks <= 100) {
            console.log("You got A+");
        }
    }
    catch (error) {
        console.log("Error is produced!");
    }
    finally {
        console.log("Finally");
    }
}
gradeSystem();
