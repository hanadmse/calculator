function operate() {
    let num = parseFloat(displayBtn.textContent, 10);
    
    if (!(isCalculating)) {
         total = num;
         eqDisplay.textContent = "";
    }
    else {
        if (operator === "/" && num === 0) {
            clear();
            displayBtn.textContent = "Cannot divide by zero!"
            return;
        } else {
            calculate(num);
        }
    }

    if (!Number.isInteger(total)) total = parseFloat(total.toFixed(2));

    if (isEqualSignClicked) {
        eqDisplay.textContent += num + " = ";
        let copy = total;
        displayBtn.textContent = copy;
        total = 0;
        isCalculating = false;
    }
    
    else {
        eqDisplay.textContent += num + " " + operator + " ";
        displayBtn.textContent = total;
        isCalculating = true;
    }
    shouldRewriteDisplay = true;
}

function calculate(num) {
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
    if (shouldRewriteDisplay) {
        displayBtn.textContent = numInput;
        shouldRewriteDisplay = false;
    }
    else {
        displayBtn.textContent += numInput;
    } 
}

function clear() {
    displayBtn.textContent = "0";
    eqDisplay.textContent = "";
    total = 0;
    shouldRewriteDisplay = true;
    operator = "";
    isEqualSignClicked = false;
    isCalculating = false;  
}

let total = 0;
let shouldRewriteDisplay = true;
let operator = "";
let isEqualSignClicked = false;
let isCalculating = false;

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
    isEqualSignClicked = true;
    operate();
    isEqualSignClicked = false;
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