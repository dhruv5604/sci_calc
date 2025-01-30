import { input, output, equal, btns, clear, select, backspace } from './index.js'
import { Calculator } from './calculator.js';
import { mr, ms,mplus,mminus,mclr } from './memoryFunc.js';

//Adding click event for all the buttons
for (let btn of btns) {
    btn.addEventListener("click", (e) => {

        //if initially input is 0 then make it empty
        

        // if x^2 is pressed then this func is called
        if (btn.id == "x2") {
            let calc = new Calculator();
            calc.square(input.value);
        }

        //func for sqrt
        if (btn.id == "sqrt") {
            let calc = new Calculator();
            calc.sqrt(input.value);
        }

        //func for abs value
        if (btn.id == "abs") {
            let calc = new Calculator();
            calc.abs(input.value);
        }

        //func for log
        if (btn.id == "log") {
            let calc = new Calculator();
            calc.logNum(input.value);
        }

        //func for ln
        if (btn.id == "ln") {
            let result = Math.LN2;
            input.value += result.toFixed(4);
        }

        if (btn.id == "n!") {
            let calc = new Calculator();
            calc.fact(input.value);
        }

        if (btn.id == "exp") {
            let calc = new Calculator();
            calc.exp(input.value)
        }

        if (btn.id == "1/x") {
            let calc = new Calculator();
            calc.onebyx(input.value);
        }

        if (btn.id == "powerof10") {
            let calc = new Calculator();
            calc.powerof10(input.value);
        }

        if (btn.id == "signChange") {
            output.value = String(Number(output.value) * -1)
        }

        if(btn.id == "e_btn"){
            let calc = new Calculator();
            calc.e_btn(input.value);
        }

        if(btn.id == "ms"){
            ms();
        }
        if(btn.id == "mr"){
            mr();
        }
        if(btn.id == "mplus"){
            mplus();
        }
        if(btn.id == "mminus"){
            mminus();
        }
        if(btn.id == "mclr"){
            mclr();
        }

        if(btn.id == "."){
            if(input.value == 0){
                input.value = "0.";
            }
        }

        input.value += e.target.value;

        if (input.value.length == 0) {
            input.value = "";
        }
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
