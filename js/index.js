import {Calculator} from './calculator.js'

var input = document.getElementById("ip");
var output = document.getElementById("op");
let equal = document.getElementById("ebtn");
let btns = document.querySelectorAll("button")
let nbtns = document.getElementsByClassName("nbtn");
let bbtns = document.getElementsByClassName("bbtn");
let clear = document.getElementById("clear");
let select = document.getElementById("trigonometry");
let power_10 = document.getElementById('10power');
let x2 = document.getElementById("x2");
let backspace = document.getElementById("backspace");
let onebyx = document.getElementById("1/x");

Calculator.prototype.abs = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = Math.abs(lastNum);
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result;
}

Calculator.prototype.logNum = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = Math.log(lastNum);
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result;
}

Calculator.prototype.sqrt = (expression) => {
    let lastNum = getLastNumber(expression)
    let result = Math.sqrt(lastNum);
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
    let result = 1/lastNum;
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    input.value = tempInput + result;
}

Calculator.prototype.xpowy = (expression) => {
    let lastNum = getLastNumber(expression)
    console.log("from",lastNum);
    let tempInput = input.value.slice(0, input.value.length - lastNum.length);
    // input.value = tempInput + result;
} 

function getLastNumber(expression) {
    let parts = expression.split(/[^0-9]/); // Split by any non-numeric character
    return parts.filter(num => num !== "").pop(); // Get the last valid number
}

export { input,output,btns,clear,select,equal,getLastNumber,backspace};