import { input, output, equal, btns, clear, select, backspace } from './index.js'
import { Calculator } from './calculator.js';
import { mr, ms, mplus, mminus, mclr } from './memoryFunc.js';

//Adding click event for all the buttons
for (let btn of btns) {
    btn.addEventListener("click", (e) => {

        let calc = new Calculator();

        // if x^2 is pressed then this func is called
        if (btn.id == "x2") {
            calc.square(input.value);
        }

        //func for sqrt
        if (btn.id == "sqrt") {
            calc.sqrt(input.value);
        }

        //func for abs value
        if (btn.id == "abs") {
            calc.abs(input.value);
        }

        //func for log
        if (btn.id == "log") {
            calc.logNum(input.value);
        }

        //func for ln
        if (btn.id == "ln") {
            let result = Math.LN2;
            if (input.value == "0") {
                input.value = result.toFixed(4);
            } else {
                calc.ln(input.value);
            }
        }

        //func for factorial
        if (btn.id == "n!") {
            calc.fact(input.value);
        }

        //func for exponential
        if (btn.id == "exp") {
            calc.exp(input.value)
        }

        //func for divide by number
        if (btn.id == "1/x") {
            calc.onebyx(input.value);
        }

        //func for powerof10
        if (btn.id == "powerof10") {
            calc.powerof10(input.value);
        }

        //func for changing the sign of output
        if (btn.id == "signChange") {
            output.value = String(Number(output.value) * -1)
        }

        //func for e
        if (btn.id == "e_btn") {
            calc.e_btn(input.value);
        }

        //func for MS
        if (btn.id == "ms") {
            ms();
        }

        //func for MR
        if (btn.id == "mr") {
            mr();
        }

        //func for Mplus
        if (btn.id == "mplus") {
            mplus();
        }

        //func for Mminus
        if (btn.id == "mminus") {
            mminus();
        }

        //func for Mclr
        if (btn.id == "mclr") {
            mclr();
        }

        //if initial value is 0
        if (input.value == 0) {
            input.value = "";
        }

        input.value += e.target.value;
    })
}

//adding event listener to equal button
equal.addEventListener("click", (e) => {
    // console.log("hello")
    let calc = new Calculator(input);
    calc.evaluate(input.value, e);
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
    select.value = "trigonometry"
})

backspace.addEventListener("click", () => {
    input.value = input.value.slice(0, input.value.length - 1);
})
