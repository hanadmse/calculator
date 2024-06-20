let total = 0;
let shouldRewriteDisplay = true;
let operator = "";
let isEqualSignClicked = false;
let isCalculating = false;

const eqDisplay = document.querySelector(".eqDisplay");
const displayBtn = document.querySelector(".numDisplay");

const equalBtn = document.querySelector("#equalBtn");

document.querySelectorAll(".numButton").forEach(button => {
    button.addEventListener("click", () => displayNums(button.textContent));
});

document.querySelectorAll(".operatorButton").forEach(button => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        operate();
    });
});

document.querySelector("#equalBtn").addEventListener("click", ()=> {
    isEqualSignClicked = true;
    operate();
    isEqualSignClicked = false;
})

document.querySelector("#periodBtn").addEventListener("click", ()=> {
    if (!displayBtn.textContent.includes('.')) {
        displayBtn.textContent += ".";
    }
});

document.querySelector("#signBtn").addEventListener("click", () => {
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

document.querySelector("#deleteBtn").addEventListener("click", ()=> displayBtn.textContent = displayBtn.textContent.slice(0, displayBtn.textContent.length - 1) || 0);

document.querySelector("#clearBtn").addEventListener("click", () => clear());

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
    else if (operator === "×") {
        total *= num;
    }
    else if (operator === "÷") {
        total /= num;
    }
    else {
        total %= num;
    }
}

function displayNums(numInput) {
    if (shouldRewriteDisplay || displayBtn.textContent === "0") {
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
