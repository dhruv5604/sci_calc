import { input, output, getLastNumber, deg } from "./index.js";

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
        let result = ""
        let tempInput = ""
        let tempAns = ""
        const redianValue = this.toRadians(value);
        switch (func) {
            case 'sin':
                result = (deg.value == "enable") ? Math.sin(redianValue).toFixed(2) : Math.sin(value).toFixed(2);
                tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;

            case 'cos':
                result = (deg.value == "enable") ? Math.cos(redianValue).toFixed(2) : Math.cos(value).toFixed(2);
                tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;

            case 'tan':
                result = (deg.value == "enable") ? Math.tan(redianValue).toFixed(2) : Math.tan(value).toFixed(2);
                tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;

            case 'cot':
                tempAns = (deg.value == "enable") ? Math.tan(redianValue).toFixed(2) : Math.tan(value).toFixed(2);
                result = 1/tempAns;
                tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;

            case 'sec':
                tempAns = (deg.value == "enable") ? Math.cos(redianValue).toFixed(2) : Math.cos(value).toFixed(2);
                result = 1/tempAns;
                tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;

            case 'cosec':
                tempAns = (deg.value == "enable") ? Math.sin(redianValue).toFixed(2) : Math.sin(value).toFixed(2);
                result = 1/tempAns;
                tempInput = input.value.slice(0, input.value.length - value.length);
                input.value = tempInput + result;
                break;

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