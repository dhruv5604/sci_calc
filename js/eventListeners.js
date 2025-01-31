import { input, output, equal, btns, clear, select, backspace, deg } from './index.js'
import { Calculator } from './calculator.js';
import { mr, ms, mplus, mminus, mclr } from './memoryFunc.js';

//Adding click event for all the buttons
for (let btn of btns) {
    btn.addEventListener("click", (e) => {

        let calc = new Calculator();
        let id = btn.id;

        switch (id) {
            case 'x2':
                calc.square(input.value);
                break;

            case 'sqrt':
                calc.sqrt(input.value);
                break;

            case 'abs':
                calc.abs(input.value);
                break;

            case 'log':
                calc.logNum(input.value);
                break;

            case 'ln':
                let result = Math.LN2;
                if (input.value == "0") {
                    input.value = result.toFixed(4);
                } else {
                    calc.ln(input.value);
                }

            case 'n!':
                calc.fact(input.value);
                break;

            case 'exp':
                calc.exp(input.value);
                break;

            case '1/x':
                calc.onebyx(input.value);
                break;

            case 'powerof10':
                calc.powerof10(input.value);
                break;

            case 'signChange':
                output.value = String(Number(output.value) * -1)
                break;

            case 'e_btn':
                calc.e_btn(input.value);
                break;

            case 'ms':
                ms();
                break;

            case 'mr':
                mr();
                break;

            case 'mplus':
                mplus();
                break;

            case 'mminus':
                mminus();
                break;

            case 'ms':
                ms();
                break;

            case 'mclr':
                mclr();
                break;
        }

        //func for Mclr
        if (btn.id == "mclr") {
            mclr();
        }

        //if initial value is 0
        if (input.value == 0) {
            input.value = "";
        }
        if(btn.id != "degrad"){
            input.value += e.target.value;
        }else{
            input.value = 0
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

deg.addEventListener("click", () => {
    if(deg.value == "disable"){
        deg.value = "enable";
        deg.style.background = "#000";
        deg.style.color = "#fff";
        console.log("enable")
    }
    else if(deg.value == "enable"){
        deg.value = "disable";
        deg.style.background = "#fcfcfc";
        deg.style.color = "#000";
        console.log("disable")
    }
})