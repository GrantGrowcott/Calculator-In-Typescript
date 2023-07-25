import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const getOperator  = async (): Promise<string> => {
  const operator = await rl.question("What operation would you like to perform? (+, -, *, /) ");

  if (operator === "+" || operator === "-" || operator === "/" || operator === "*") {
    return operator;
  } else {
    console.log("Please enter a valid operator.");
    return getOperator();
  }
};

const getNumber = async () => {
  let num1: number;
  let num2: number;
  while (true) {
    const inputNum1 = await rl.question("What is the first number? ");
    const inputNum2 = await rl.question("What is the second number? ");
    num1 = Number(inputNum1);
    num2 = Number(inputNum2);
    if (!isNaN(num1) && !isNaN(num2)) {
      break;
    } else {
      console.log("Please enter valid numbers.");
    }
  }
  return { num1, num2 };
};


const total = (num1: number, num2: number, chosenOperator: string) => {
      if (chosenOperator === "+") {
        console.log(`The summation of these values is ${num1 + num2}`);
      } else if (chosenOperator === "-") {
        console.log(`The subtraction of these values is ${num1 - num2}`);
      } else if (chosenOperator === "*") {
        console.log(`The product of these values is ${num1 * num2}`);
      } else if (chosenOperator === "/") {
        console.log(`The quotient of these values is ${num1 / num2}`);
      }  
};

const main = async () => {
  while (true) {
    const chosenOperator = await getOperator();
    const { num1, num2 } = await getNumber();
    total(num1, num2, chosenOperator);

    const answer = await rl.question("Do you want to perform another operation? (Y/N) ");
    if (answer.toLowerCase() !== "y") {
      break;
    }
  }
  rl.close();
};

main();
