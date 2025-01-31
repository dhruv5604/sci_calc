import { Calculator } from './calculator.js'

const input = document.getElementById("ip");
const output = document.getElementById("op");
const equal = document.getElementById("ebtn");
const btns = document.querySelectorAll("button")
const clear = document.getElementById("clear");
const select = document.getElementById("trigonometry");
const backspace = document.getElementById("backspace");

Calculator.prototype.abs = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = Math.abs(lastNum);
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result;
}

Calculator.prototype.logNum = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = Math.log(lastNum).toFixed(4);
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result;
}

Calculator.prototype.sqrt = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = Math.sqrt(lastNum).toFixed(4);
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result;
}

Calculator.prototype.exp = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = Math.exp(lastNum).toFixed(4);
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result;
}

Calculator.prototype.fact = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = 1
    for (let i = 1; i <= lastNum; i++) {
        if (i == 0) {
            return;
        }
        result *= i;
    }
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result;
}

Calculator.prototype.onebyx = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = 1 / lastNum;
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result;
}

Calculator.prototype.powerof10 = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = Math.pow(10, lastNum);
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result;
}

Calculator.prototype.ln = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = Math.LN2 * (lastNum);
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result.toFixed(4);
}

function getLastNumber(expression) {
    let parts = expression.split(/[^0-9]/); // Split by any non-numeric character
    return parts.filter(num => num !== "").pop(); // Get the last valid number
}

export { input, output, btns, clear, select, equal, getLastNumber, backspace };