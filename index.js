var input = document.getElementById("ip");
var output = document.getElementById("op");
let equal = document.getElementById("ebtn");
let btns = document.querySelectorAll("button")
let nbtns = document.getElementsByClassName("nbtn");
let bbtns = document.getElementsByClassName("bbtn");
let clear = document.getElementById("clear");
let select = document.getElementById("trigonometry");

//Class
class Calculator {

    evaluate() {
        let result = eval(input.value);
        output.value = result;
        // this.isDegree = true;
    }

    toRadians(angle) {
        return (angle * Math.PI) / 180;
    }

    trigonometry(func) {
        let value = input.value;
        switch (func) {
            case 'sin':
                output.value = Math.sin(this.toRadians(value))
                break;
            case 'cos':
                output.value = Math.cos(this.toRadians(value))
                break;
            case 'tan':
                output.value = Math.tan(this.toRadians(value))
                break;
            case 'tan':
                output.value = 1/(Math.tan(this.toRadians(value)))
                break;
            case 'cos':
                output.value = 1/(Math.cos(this.toRadians(value)))
                break;
            case 'cosec':
                output.value = 1/(Math.sin(this.toRadians(value)))    
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

// select.addEventListener("change", () => {
//     if (input.value == 0) {
//         input.value = "";
//     }
//     let calc = new Calculator();
//     calc.trigonometry(select.value)
// })