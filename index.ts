import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber: number = Math.floor(1000 + Math.random() * 90000);

let myBalance : number = 0

let answer = await inquirer.prompt(
    [
        {
            name : "student",
            type : "input",
            message : chalk.green("\n\tEnter student name :\t\n "),
            validate: function(value){
                if(value.trim() !== ""){
                    return true;
                }
                return chalk.redBright("Please enter a non-empty value")
            }
        },
        {
            name : "courses",
            type: "list",
            message :chalk.green("\n\tSelect the course to enrolled\t\n"),
            choices: ["HTML" , "Graphic Designing" , "Ethical Hacking" , "Amazone"]
        }
    ]
)

const tutionFee : {[key: string]: number} = {
    "HTML" : 2500,
    "Graphic Designing" : 5000,
    "Ethical Hacking" : 6000,
    "Amazone" : 6500
}

console.log(chalk.bgBlueBright(`\n\t Tution fees : ${tutionFee[answer.courses]}`))

console.log(`\t\nBalance: ${myBalance}\t\n`) 

let paymentType = await inquirer.prompt(
    [
        {
            name: "payment",
            type: "list",
            message: chalk.green("\n\tplease select your payment method\n\t"),
            choices: ["Bank Transfer" , "Easypaisa" , "Jazzcash"]
        },
        {
            name : "amount",
            type : "input",
            message :chalk.green("\n\t Enter your amount\t\n"),
            validate: function(value){
                if(value.trim !== ""){
                    return true;
                }
                return chalk.redBright("\n\t Please enter a non-empty value")
            }
        }
    ]
);

console.log(chalk.green.italic(`\n\tYou select payment method${paymentType.payment}\t\n`))

const tutionFees = tutionFee[answer.courses]
const paymentAmount = parseFloat(paymentType.amount)

if(tutionFees === paymentAmount){
    console.log(chalk.overline(chalk.magenta(`\n\tCONGRATULATION!!!! You have successfully enrolled in ${answer.courses}\t\n`)))

    let ans = await inquirer.prompt([{
        name : "select",
        type : "list",
        message: chalk.green("\n\tWhat would you like to do next ? \t\n"),
        choices: ["View status" , "Exit"]
    }
])

if(ans.select === "View status"){
    console.log("\n\t ***************** Status *************************\t\n");
    console.log(chalk.blue(`\n\tStudent Name ${answer.student}\n\t`));
    console.log(chalk.bgBlue.bold(`\n\t Studen ID : ${randomNumber}\t\n`))
    console.log(chalk.bgBlue.bold(`\n\t Course : ${answer.courses}\t\n`))
    console.log(chalk.bgBlue.bold(`\n\t Tution Fees ${paymentAmount}\t\n`))
    console.log(chalk.bgBlue.bold(`\n\t Balance : ${myBalance += paymentAmount}\t\n`)) 
}else{
    console.log(chalk.bold("\n\t Exiting student management system \t\n"))
}
}else{
    console.log(chalk.redBright(chalk.red("\n\tInvalid amount due to course\t\n")));
    
}