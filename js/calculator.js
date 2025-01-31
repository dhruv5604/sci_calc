import { input, output, getLastNumber } from "./index.js";

class Calculator {

    evaluate(expression, e) {
        let result = eval(input.value);
        output.value = result;
    }

    square(expression) {
        let lastNum = getLastNumber(expression)
        let result = Math.pow(lastNum, 2);
        let tempInput = input.value.slice(0, input.value.length - lastNum.length);
        input.value = tempInput + result;
    }

    toRadians(angle) {
        return (angle * Math.PI) / 180;
    }

    extractNumberBeforeTrig(expression) {
        let match = expression.match(/(\d+)(?=(sin|cos|tan|cot|sec|cosec))/);
        return match ? match[1] : null; // Returns the number before trigonometry function
    }

    trigonometry(func) {
        let temp = input.value + func;
        let value = this.extractNumberBeforeTrig(temp);
        switch (func) {
            case 'sin': {
                let result = Math.sin(this.toRadians(value)).toFixed(2);
                let tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;
            }
            case 'cos': {
                let result = Math.cos(this.toRadians(value)).toFixed(2);
                let tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;
            }
            case 'tan': {
                let result = Math.tan(this.toRadians(value)).toFixed(2);
                let tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;
            }
            case 'cot': {
                let result = 1 / (Math.tan(this.toRadians(value)).toFixed(2));
                let tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;
            }
            case 'sec': {
                let result = 1 / (Math.cos(this.toRadians(value)).toFixed(2));
                let tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;
            }
            case 'cosec': {
                let result = 1 / (Math.sin(this.toRadians(value)).toFixed(2));
                let tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;
            }
            default:
                output.value = "Invalid Input"
        }
    }

    e_btn(expression) {
        let lastNum = getLastNumber(expression)
        let result = Math.pow(Math.E, lastNum).toFixed(4);
        let tempInput = input.value.slice(0, input.value.length - lastNum.length);
        input.value = tempInput + result;
    }
}

export { Calculator };