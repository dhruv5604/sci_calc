import { input, output } from "./index.js";
import { Calculator } from "./calculator.js"

//Memory Store: stores output to memory/localstorage
function ms() {
    localStorage.setItem("Memory", op.value)
}
//Memory Recall: prints value which is available in memory
function mr() {
    input.value = localStorage.getItem("Memory")
    let cal = new Calculator()
    cal.evaluate();
}
//Memory Add: takes the number on the display, adds it to the memory, and puts the result into memory
function mplus() {
    input.value = localStorage.getItem("Memory") + "+" + op.value
    localStorage.setItem("Memory", eval(localStorage.getItem("Memory") + "+" + op.value))
    let cal = new Calculator()
    cal.evaluate();
}
//Memory Subtract: takes the number on the display, subtracts it from memory, and puts the result into memory
function mminus() {
    input.value = localStorage.getItem("Memory") + "-" + op.value
    localStorage.setItem("Memory", eval(localStorage.getItem("Memory") + "-" + op.value))
    let cal = new Calculator()
    cal.evaluate();
}
//Memory Clear:sets the memory to 0
function mclr() {
    localStorage.setItem("Memory", 0)
    input.value = 0;
    output.value = "";
}

export { ms, mr, mplus, mminus, mclr }