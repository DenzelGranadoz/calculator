//global variables
//int variables
let currentOperator;
let counter = 0;
//string variables to easily convert to node and append
let currentOperand = "";
let previousOperand = "";
let temp = "";
let total = ""; 


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
    currentItemDisplay.innerHTML = "";
    previousItemDisplay.innerHTML = "";
    counter = 0;
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

//to-do -> efficiently append currentoperand and total into their own divs 
function equal() {
    temp = currentOperand;

    let value = stringToHTML(temp+" =");
    previousItemDisplay.appendChild(value);

    let tempInt = parseInt(temp);
    let previousOperandInt = parseInt(previousOperand);

    currentItemDisplay.innerHTML = "";

    total += equation(currentOperator, previousOperandInt, tempInt);

    currentItemDisplay.appendChild(stringToHTML(total));
}

function numbers() {
    let currentNumber = this.textContent;
    let value = stringToHTML(currentNumber);
    currentItemDisplay.appendChild(value);
    currentOperand += currentNumber;
}

function operators() {
    currentItemDisplay.innerHTML = "";
    currentOperator = this.textContent;
    //testing out syntax I learned from wes bos videos :D
    if(counter === 0) {     
        previousOperand += `${currentOperand} ${currentOperator} `;
    } else { //need to clear here
    temp = previousOperand;
    previousOperand = currentOperand;
    }
    // figure out temp value ************************ 
    let value = stringToHTML(previousOperand);
    previousItemDisplay.appendChild(value);
    previousOperand = currentOperand;
    console.log(temp);
    console.log(previousOperand);
    currentOperand = "";
    // if(counter == 1) {
    //     equation(CurrentOperator, previousOperand, CurrentOperand);
    // }
    //console.log(previousOperand + " " + currentOperand);
    counter++;
}
//reset counter somewhere
function equation(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function stringToHTML(str) {
    let newNode = new DOMParser().parseFromString(str, 'text/html');
    return newNode.body.firstChild;
}

//to do
//figure out second round of operation
//figure out changing of operator
//finish delete button