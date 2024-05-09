
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance: number = 20000;
let myPin: number = 1234;
let fastCash:number=0
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your Pin",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("Correct Pin Code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option",
      type: "list",
      choices: ["Withdraw", "Fast Cash", "Check Balance"],
    },
  ]);
  if (operationAns.operation === "Check Balance") {
    console.log(
      `Your Current Balance is $${myBalance}\n\nThank you for using "codeCash-07"`
    );
  } else if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "please enter your amount $",
        type: "number",
      },
    ]);
    if (myBalance < amountAns.amount) {
      console.log(`Oops! Looks like your ambition exceed your balance.\nPlease adjust your amount accordingly
  \n\nThank you for using "codeCash-07"`);
    } else if ((myBalance -= amountAns.amount)) {
      console.log(
        `Your remaining balance is $${myBalance}\n\nThank you for using "codeCash-07"`
      );
    }
  } else if (operationAns.operation === "Fast Cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "Fastcash",
        message: "Please select an amount",
        type: "list",
        choices: ["$500", "$1000", "$5000", "$10000"],
      },
    ]);
    if (fastCashAns.Fastcash === "$500") 
        {
            fastCash=-500+myBalance
      console.log(
        `Your remainaing Balance is $${fastCash}`,
        `\n\nThank you for using "codeCash-07"`
      );
    } else if (fastCashAns.Fastcash === "$1000") {
        fastCash=-1000+myBalance
        console.log(
          `Your remainaing Balance is $${fastCash}`,
        `\n\nThank you for using "codeCash-07"`
      );
    } else if (fastCashAns.Fastcash === "$5000") {
        fastCash=-5000+myBalance
        console.log(
          `Your remainaing Balance is $${fastCash}`,
        `\n\nThank you for using "codeCash-07"`
      );
    } else if (fastCashAns.Fastcash === "$10000") {
        fastCash=-10000+myBalance
        console.log(
          `Your remainaing Balance is $${fastCash}`,
        `\n\nThank you for using "codeCash-07"`
      );
    }
  }
} else {
  console.log(`Incorrect Pin "try Again"\n\nThank you for using "codeCash-07"`);
}
