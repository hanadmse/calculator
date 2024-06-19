function operate() {
    num = parseFloat(displayBtn.textContent, 10);
    console.log("inside num: " + num + " " + typeof num);
    
    if (operator === "" || !(hasCalculated)) {
        total = num;
        eqDisplay.textContent = "";
    }
    else {
        if (operator === "/" && num === 0) {
            clear();
            rewrite = true;
            displayBtn.textContent = "Cannot divide by zero!"
            return;
        } else {
            calculate();
        }
    }

    if (!Number.isInteger(total)) total = parseFloat(total.toFixed(2));

    if (equals) {
        eqDisplay.textContent += num + " = ";
        let copy = total;
        displayBtn.textContent = copy;
        total = 0;
        hasCalculated = false;
    }
    
    else {
        eqDisplay.textContent += num + " " + operator + " ";
        displayBtn.textContent = total;
        hasCalculated = true;
    }
    rewrite = true;
}

function calculate() {
    if (operator === "+") {
        total += num;
    }
    else if (operator === "-") {
        total -= num;
    }
    else if (operator === "*") {
        total *= num;
    }
    else if (operator === "/") {
        total /= num;
    }
    else {
        total %= num;
    }
}

function displayNums(numInput) {
    if (displayBtn.textContent === "0" || rewrite) {
        displayBtn.textContent = numInput;
        rewrite = false;
    }
    else {
        displayBtn.textContent += numInput;
    } 
}

function clear() {
    displayBtn.textContent = "0";
    eqDisplay.textContent = "";
    total = 0;
    num = "";
    rewrite = false;
    numInput = "";
    operator = "";
    equals = false;
    hasCalculated = false;  
}

let total = 0;
let num = "";
let rewrite = false;
let operator = "";
let equals = false;
let hasCalculated = false;

const eqDisplay = document.querySelector(".eqDisplay");
const displayBtn = document.querySelector(".numDisplay");
const clearBtn = document.querySelector("#clearBtn");
const divBtn = document.querySelector("#divBtn");
const multBtn = document.querySelector("#multBtn");
const subBtn = document.querySelector("#subBtn");
const addBtn = document.querySelector("#addBtn");
const equalBtn = document.querySelector("#equalBtn");
const periodBtn = document.querySelector("#periodBtn");
const modBtn = document.querySelector("#modBtn");
const deleteBtn = document.querySelector("#deleteBtn");

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
    clear();
});

deleteBtn.addEventListener("click", () => {
    displayBtn.textContent = displayBtn.textContent.slice(0, displayBtn.textContent.length - 1)
});

signBtn.addEventListener("click", () => {
    const firstChar = displayBtn.textContent.charAt(0);
    if (firstChar === '-') {
        displayBtn.textContent = displayBtn.textContent.slice(1);
    }
    else {
        if (firstChar !== '0') {
            displayBtn.textContent = "-" + displayBtn.textContent;
        } 
    }
});

modBtn.addEventListener("click", () => {
    operator = "%"; 
    operate();
});

periodBtn.addEventListener("click", () => {
    displayBtn.textContent += ".";
});


addBtn.addEventListener("click", () => {
    operator = "+"; 
    operate();
});

subBtn.addEventListener("click", () => {
    operator = "-"; 
    operate();
});

multBtn.addEventListener("click", () => {
    operator = "*"; 
    operate();
});

divBtn.addEventListener("click", () => {
    operator = "/"; 
    operate();
});

equalBtn.addEventListener("click", () => {
    equals = true;
    operate();
    equals = false;
});

sevenBtn.addEventListener("click", () => {
    displayNums("7");
});
eightBtn.addEventListener("click", () => {
    displayNums("8");
});
nineBtn.addEventListener("click", () => {
    displayNums("9");
});
fourBtn.addEventListener("click", () => {
    displayNums("4");
});
fiveBtn.addEventListener("click", () => {
    displayNums("5");
});
sixBtn.addEventListener("click", () => {
    displayNums("6");
});
threeBtn.addEventListener("click", () => {
    displayNums("3");
});
twoBtn.addEventListener("click", () => {
    displayNums("2");
});
oneBtn.addEventListener("click", () => {
    displayNums("1");
});
zeroBtn.addEventListener("click", () => {
    displayNums("0");
});