function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "ERR:Div 0";
    }
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator === "add") {
        return add(num1, num2);
    }
    else if (operator === "subtract") {
        return subtract(num1, num2);
    }
    else if (operator === "multiply") {
        return multiply(num1, num2);
    }
    else {
        return divide(num1, num2);
    }
}
let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";


const displayBtn = document.querySelector(".display");
const clearBtn = document.querySelector("#clearBtn");
const divBtn = document.querySelector("#divBtn");
const multBtn = document.querySelector("#multBtn");
const subBtn = document.querySelector("#subBtn");
const addBtn = document.querySelector("#addBtn");
const equalBtn = document.querySelector("#equalBtn");

const sevenBtn = document.querySelector("#sevenBtn");
const eightBtn = document.querySelector("#eightBtn");
const nineBtn = document.querySelector("#nineBtn");
const fourBtn = document.querySelector("#fourBtn");
const fiveBtn = document.querySelector("#fiveBtn");
const sixBtn = document.querySelector("#sixBtn");
const threeBtn = document.querySelector("#threeBtn");
const twoBtn = document.querySelector("#twoBtn");
const oneBtn = document.querySelector("#oneBtn");

const keyPadBtn = document.querySelector(".keyPad");


clearBtn.addEventListener("click", () => {
    displayBtn.textContent = "";
    num1 = "";
    num2 = "";
    operator = ""
});

signBtn.addEventListener("click", () => {
    const sign = displayBtn.textContent.charAt(0);
    if (sign === '-') {
        displayBtn.textContent = displayBtn.textContent.slice(1);
    }
    else {
        displayBtn.textContent = "-" + displayBtn.textContent;
    }
});


addBtn.addEventListener("click", () => {
    num1 = parseFloat(displayBtn.textContent, 10);
    displayBtn.textContent = "";
    operator = "add";
});

subBtn.addEventListener("click", () => {
    num1 = parseFloat(displayBtn.textContent, 10);
    displayBtn.textContent = "";
    operator = "subtract";
});

multBtn.addEventListener("click", () => {
    num1 = parseFloat(displayBtn.textContent, 10);
    displayBtn.textContent = "";
    operator = "multiply";
});

divBtn.addEventListener("click", () => {
    num1 = parseFloat(displayBtn.textContent, 10);
    displayBtn.textContent = "";
    operator = "divide";
});

equalBtn.addEventListener("click", () => {
    if ((num1 !== "") && (operator !== "")) {
        console.log("inside");
        num2 = parseFloat(displayBtn.textContent, 10);
        displayBtn.textContent = "";
        const calculation = operate(num1, num2, operator);
        num1 = calculation;
        displayBtn.textContent = calculation;
    }
});

sevenBtn.addEventListener("click", () => {
    displayBtn.textContent += "7";
});
eightBtn.addEventListener("click", () => {
    displayBtn.textContent += "8";
});
nineBtn.addEventListener("click", () => {
    displayBtn.textContent += "9";
});
fourBtn.addEventListener("click", () => {
    displayBtn.textContent += "4";
});
fiveBtn.addEventListener("click", () => {
    displayBtn.textContent += "5";
});
sixBtn.addEventListener("click", () => {
    displayBtn.textContent += "6";
});
threeBtn.addEventListener("click", () => {
    displayBtn.textContent += "3";
});
twoBtn.addEventListener("click", () => {
    displayBtn.textContent += "2";
});
oneBtn.addEventListener("click", () => {
    displayBtn.textContent += "1";
});
zeroBtn.addEventListener("click", () => {
    displayBtn.textContent += "0";
});