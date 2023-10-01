const complexObject = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    interests: ["programming", "music", "hiking"],
    address: {
        street: "123 Main St",
        city: "Exampleville",
        postalCode: "12345",
    },
    grades: {
        math: {
            midterm: 85,
            final: 92,
        },
        science: {
            midterm: 78,
            final: 88,
        },
    },
    contact: {
        email: "john.doe@example.com",
        phone: "+1234567890",
    },
    tuple: [1, "two", true],
    functionExample: function (x) {
        return x * 2;
    },
};
//------------------ATM Question----------------------
import inquirer from "inquirer";
let account = {
    accountNumber: "PK1234IST",
    accountPin: "1234",
    balance: 1000,
    transactions: [],
};
//------Login-------
async function login() {
    let userDetails = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "string",
            message: "Enter you Account Number",
        },
        {
            name: "accountPin",
            type: "password",
            message: "Enter your Account PIN ",
            mask: "*"
        },
    ]);
    if (userDetails.accountNumber == account.accountNumber &&
        userDetails.accountPin == account.accountPin) {
        console.log("Succesfully Login");
        performTasks();
    }
    else {
        console.log("Login Failed");
    }
}
//------Check Balance-------
async function checkBalance() {
    console.log(`Your Current Balance is ${account.balance}`);
    performTasks();
}
//------WithDraw Money-------
async function withDraw() {
    const withDrawDetails = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the Amount you want to Withdraw : ",
            validate: (input) => {
                if (isNaN(parseInt(input))) {
                    return "Please enter a valid amount";
                }
                else if (parseInt(input) > account.balance) {
                    return `You don't have enough money`;
                }
                else {
                    return true;
                }
            },
        },
    ]);
    const amount = withDrawDetails.amount;
    account.balance = account.balance - amount;
    account.transactions.push(`Withdraw : ${amount}`);
    console.log(`Withdraw Amount :  ${amount} , Remaining Balance  : ${account.balance} `);
    performTasks();
}
//------View Transaction-------
function viewTransaction() {
    if (account.transactions.length > 0) {
        console.log("Previous Transaction ");
        account.transactions.forEach((transaction, index) => {
            console.log(`${index + 1}. ${transaction}`);
        });
    }
    else {
        console.log("No Previous Transaction");
    }
    performTasks();
}
//------Logout-------
function logout() {
    console.log("Succesfully Logout");
}
//------Perform Tasks-------
async function performTasks() {
    const actionsPrompt = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "What do You Want To Perform ? ",
            choices: ["Check Balance", "Withdraw", "View Transaction", "Logout"],
        }
    ]);
    const choice = actionsPrompt.action;
    switch (choice) {
        case 'Check Balance':
            checkBalance();
            break;
        case 'Withdraw':
            withDraw();
            break;
        case 'View Transaction':
            viewTransaction();
            break;
        case 'Logout':
            logout();
            break;
    }
}
login();
