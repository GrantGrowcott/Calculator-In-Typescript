"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("node:readline/promises"));
const node_process_1 = require("node:process");
const rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
const getOperator = () => __awaiter(void 0, void 0, void 0, function* () {
    const operator = yield rl.question("What operation would you like to perform? (+, -, *, /) ");
    if (operator === "+" || operator === "-" || operator === "/" || operator === "*") {
        return operator;
    }
    else {
        console.log("Please enter a valid operator.");
        return getOperator();
    }
});
const getNumber = () => __awaiter(void 0, void 0, void 0, function* () {
    let num1;
    let num2;
    while (true) {
        const inputNum1 = yield rl.question("What is the first number? ");
        const inputNum2 = yield rl.question("What is the second number? ");
        num1 = Number(inputNum1);
        num2 = Number(inputNum2);
        if (!isNaN(num1) && !isNaN(num2)) {
            break;
        }
        else {
            console.log("Please enter valid numbers.");
        }
    }
    return { num1, num2 };
});
const total = (num1, num2, chosenOperator) => {
    if (chosenOperator === "+") {
        console.log(`The summation of these values is ${num1 + num2}`);
    }
    else if (chosenOperator === "-") {
        console.log(`The subtraction of these values is ${num1 - num2}`);
    }
    else if (chosenOperator === "*") {
        console.log(`The product of these values is ${num1 * num2}`);
    }
    else if (chosenOperator === "/") {
        console.log(`The quotient of these values is ${num1 / num2}`);
    }
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    while (true) {
        const chosenOperator = yield getOperator();
        const { num1, num2 } = yield getNumber();
        total(num1, num2, chosenOperator);
        const answer = yield rl.question("Do you want to perform another operation? (Y/N) ");
        if (answer.toLowerCase() !== "y") {
            break;
        }
    }
    rl.close();
});
main();
