import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "input",
        name: "userid",
        message: "Kindly Enter Your ID : "
    },
    {
        type: "number",
        name: "userpin",
        message: "Kindly Enter Your PIN : "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Savings"],
        message: "Select  Account Type : "
    },
    {
        type: "list",
        name: "TransactionType",
        choices: ["Fast Cash", "Withdrawal"],
        message: "Select  Transcation Type : ",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "WithdrawalMethod",
        choices: ["1000", "2000", "5000", "10000"],
        message: "Select Your Amount : ",
        when(answers) {
            return answers.TransactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        Enter: " Select Your Amount : ",
        when(answers) {
            return answers.TransactionType == "Withdrawal";
        },
    },
]);
if (answers.userid && answers.userpin) {
    let balance = Math.round(Math.random() * 1000000);
    console.log(balance);
    let EnteredAmount = answers.Amount;
    if (balance >= EnteredAmount) {
        let RemainBalance = balance - EnteredAmount;
        console.log("Your Remaining Balance is", RemainBalance);
    }
    else {
        console.log("Insufficient Balance");
    }
}
