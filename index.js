var input = document.getElementById("ip");
var output = document.getElementById("op");
let equal = document.getElementById("ebtn");
let btns = document.querySelectorAll("button")
let nbtns = document.getElementsByClassName("nbtn");
let bbtns = document.getElementsByClassName("bbtn");
let clear = document.getElementById("clear");
let select = document.getElementById("trigonometry");
let power_10 = document.getElementById('10power');

//Class
class Calculator {

    evaluate() {

        if(input.value.includes('^')){
            let temp = input.value.split('^');
            console.log(temp);

            let result = Math.pow(10,temp[1]);
            // input.value = input.value.split();
            // input.value += result;
            output.value = result;
            return;
        }

        let result = eval(input.value);
        output.value = result;
        // this.isDegree = true;
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
        let value =  this.extractNumberBeforeTrig(temp);
        switch (func) {
            case 'sin': // 1 + 90sin
                input.value = temp.slice(0,func.length-1);
                input.value += Math.sin(this.toRadians(value)).toFixed(2)
                break;
            case 'cos':
                input.value = temp.slice(0,func.length-1);
                input.value += Math.cos(this.toRadians(value)).toFixed(2)
                break;
            case 'tan':
                input.value = temp.slice(0,func.length-1);
                input.value += Math.tan(this.toRadians(value)).toFixed(2)
                break;
            case 'cot':
                input.value = temp.slice(0,func.length-1);
                input.value += 1/(Math.tan(this.toRadians(value)).toFixed(2))
                break;
            case 'sec':
                input.value = temp.slice(0,func.length-1);
                input.value += 1/(Math.cos(this.toRadians(value)).toFixed(2))
                break;
            case 'cosec':
                input.value = temp.slice(0,func.length-1);
                input.value += 1/(Math.sin(this.toRadians(value)).toFixed(2))
                break;
            default:
                output.value = "Invalid Input"    
        }
    }
}

//Adding click event for all the buttons
for (let btn of btns) {
    btn.addEventListener("click", (e) => {
        if (input.value == 0) {
            input.value = "";
        }
        input.value += e.target.value;
    })
}

//adding event listener to equal button
equal.addEventListener("click", () => {
    // console.log("hello")
    let calc = new Calculator(input);
    calc.evaluate(input.value);
})

//adding event listener to clear button
clear.addEventListener("click", () => {
    input.value = 0;
    output.value = "";
})

select.addEventListener("change", () => {
    if (input.value == 0) {
        input.value = "";
    }
    let calc = new Calculator();
    calc.trigonometry(select.value)
})
