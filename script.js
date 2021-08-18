//to do
//figure out changing of operator 
//add window listener for keyboard input

//global variables
let currentOperator;
let operatorCounter = 0;
let currentOperand = "";
let previousOperand = "";
let total = ""; 
let latestButton = "";

//selectors
const previousItemDisplay = document.getElementById("previous-item");
const currentItemDisplay = document.getElementById("current-item");
const allClearButton = document.querySelector(".all-clear-btn");
const equalButton = document.querySelector(".equal-btn");
const deleteButton = document.querySelector(".delete-btn");
const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

//event listeners
allClearButton.addEventListener("click", allClear);
equalButton.addEventListener("click", equal);
deleteButton.addEventListener("click", deleteBtn);
numberButtons.forEach((number) => number.addEventListener("click", numbers));
operatorButtons.forEach((operator) => operator.addEventListener("click", operators));

//do for each maybe
// window.addEventListener("keydown", (e) => {
//     if(e.key >= 0 && e.key <= 9) {
//         document.querySelector(".number-btn").click();
//     }
// });

// function keyboardInput(e) {
//     if(e.key >= 0 && e.key <= 9) {
//         numbers(e.key);
//     }
//     if(e.key == "Backspace") {
//         deleteBtn();
//     }
//     console.log(e);
// }

//functions
function allClear() {
    currentItemDisplay.textContent = "";
    previousItemDisplay.textContent = "";
    operatorCounter = 0;
    currentOperand = "";
    previousOperand = "";
    total = ""; 
    latestButton = "";
}

function deleteBtn() {
    if(latestButton == "=") {
        previousItemDisplay.textContent = " ";
        return;
    }
    currentItemDisplay.textContent = currentItemDisplay.textContent.toString().slice(0, -1);
    currentOperand = currentItemDisplay.textContent;
}

function equal() {
    if(currentItemDisplay.firstChild === null) return;
    currentItemDisplay.textContent = "";
    previousItemDisplay.textContent =  `${previousOperand} ${currentOperator} ${currentOperand} ${"="}`;

    let currentOperandFloat = parseFloat(currentOperand);       
    let previousOperandFloat = parseFloat(previousOperand); 
    total = equation(currentOperator, previousOperandFloat, currentOperandFloat);

    currentOperand = total;
    currentItemDisplay.textContent = total;
    latestButton = this.textContent;
    
    // this checks if total is decimal then outputs it to two decimal places
    // if(total % 1 != 0) {
    //     currentItemDisplay.textContent = total.toFixed(2);
    // }
}

function numbers() {
    if(currentItemDisplay.textContent.includes('.') && this.textContent == '.') return;
    latestButton += this.textContent;
    currentItemDisplay.textContent = latestButton;
    currentOperand = currentItemDisplay.textContent; 
}

function operators() {
    // call equal function in here
    // if previous was operator, return, else equal function
    // if(operatorCounter > 0) {
    // }
    latestButton = "";
    currentOperator = this.textContent;
    previousItemDisplay.textContent = `${currentOperand} ${currentOperator} `;
    previousOperand = currentOperand;
    operatorCounter++;
}

function equation(operator, a, b) {
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "÷":
            return a / b;
    }
}

