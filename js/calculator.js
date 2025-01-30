import { input,output,getLastNumber } from "./index.js";

class Calculator {

    evaluate(expression,e) {

        if(input.value.includes('^') && e.target.value == "^"){
            console.log("I am dhruv")
            return
        }

        if (input.value.includes('^') ){
            let temp = input.value.split('^');
            let result = Math.pow(10, temp[1]);
            output.value = result;
            return;
        }

        let result = eval(input.value);
        output.value = result;
        // this.isDegree = true;
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
        console.log(temp)
        let value = this.extractNumberBeforeTrig(temp);
        switch (func) {
            case 'sin': // 1 + 90sin
                input.value = temp.slice(0, func.length - 1);
                input.value += Math.sin(this.toRadians(value)).toFixed(2)
                break;
            case 'cos':
                input.value = temp.slice(0, func.length - 1);
                input.value += Math.cos(this.toRadians(value)).toFixed(2)
                break;
            case 'tan':
                input.value = temp.slice(0, func.length - 1);
                input.value += Math.tan(this.toRadians(value)).toFixed(2)
                break;
            case 'cot':
                input.value = temp.slice(0, func.length - 1);
                input.value += 1 / (Math.tan(this.toRadians(value)).toFixed(2))
                break;
            case 'sec':
                input.value = temp.slice(0, func.length - 1);
                input.value += 1 / (Math.cos(this.toRadians(value)).toFixed(2))
                break;
            case 'cosec':
                input.value = temp.slice(0, func.length - 1);
                input.value += 1 / (Math.sin(this.toRadians(value)).toFixed(2))
                break;
            default:
                output.value = "Invalid Input"
        }
    }
}



export {Calculator};