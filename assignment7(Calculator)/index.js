import inquirer from "inquirer";
let questions = [
    {
        type: "number",
        name: "num1",
        message: "Enter Number 1 : ",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter Number 2 : ",
    },
    {
        type: "list",
        name: "operator",
        message: "Select Operator:",
        choices: ["+", "-", "*", "/", "%", "^"],
    },
];
let answers = inquirer.prompt(questions);
answers
    .then((answer) => {
    switch (answer.operator) {
        case "+":
            console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`);
            break;
        case "-":
            console.log(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);
            break;
        case "*":
            console.log(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);
            break;
        case "/":
            console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 / answer.num2}`);
            break;
        case "%":
            console.log(`${answer.num1} % ${answer.num2} = ${answer.num1 % answer.num2}`);
            break;
        case "+":
            console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`);
            break;
        case "^":
            console.log(`${answer.num1} ^ ${answer.num2} = ${answer.num1 ** answer.num2}`);
            break;
        default:
            break;
    }
})
    .catch((error) => {
    console.log("Error", error);
});
