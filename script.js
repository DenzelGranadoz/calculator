//to do
//figure out changing of operator 
//finish delete button
//add window listener for keyboard input

//global variables
let currentOperator;
let operatorCounter = 0;
let currentOperand = "";
let previousOperand = "";
let temp = "";
let total = ""; 
let latestButton ="";

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
    temp = "";
    total = ""; 
}

//add delete from currentOperand variable as well
function deleteBtn() {
    //checking if node is empty, return if true to avoid console error
    if(currentItemDisplay.firstChild === null) {
        return;
    } else {
    currentItemDisplay.removeChild(currentItemDisplay.lastChild);
    }
}

function equal() {
    currentItemDisplay.textContent = "";
    previousItemDisplay.textContent =  `${previousOperand} ${currentOperator} ${currentOperand} ${"="}`;

    let currentOperandFloat = parseFloat(currentOperand);       
    let previousOperandFloat = parseFloat(previousOperand);

    total = equation(currentOperator, previousOperandFloat, currentOperandFloat);
    currentOperand = total;
    currentItemDisplay.textContent = total;
}
// && latestButton == "+" || latestButton == "-" || latestButton == "*" || latestButton == "÷"
function numbers() {
    if(currentItemDisplay.textContent.includes('.') && this.textContent == '.') return;
    // if(operatorCounter > 0) {
    //     currentItemDisplay.textContent = "";
    // }
    currentItemDisplay.textContent += this.textContent;
    currentOperand = currentItemDisplay.textContent; 
}

function operators() {
    if(operatorCounter === 0) {
        currentItemDisplay.textContent = "";
    } else {
        //currentItemDisplay.textContent = currentOperand;
        currentItemDisplay.textContent = "";
        //call equal function in here
        //if previous was operator, return, else equal function
    }
    currentOperator = this.textContent;
    previousItemDisplay.textContent = `${currentOperand} ${currentOperator} `;
    previousOperand = currentOperand;
    operatorCounter++;
}

//reset counter somewhere
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

