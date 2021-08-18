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
    currentItemDisplay.textContent = total; //if total contains ".", .toFixed(2)
}

function numbers() {
    if(currentItemDisplay.textContent.includes('.') && this.textContent == '.') return;
    latestButton += this.textContent
    currentItemDisplay.textContent = latestButton;
    currentOperand = currentItemDisplay.textContent; 
}

function operators() {
    // if(operatorCounter > 0) {
    //     call equal function in here
    //     if previous was operator, return, else equal function
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

