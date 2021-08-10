//to do - finish this by aug 15 
//figure out second round of operation
//figure out changing of operator
//finish delete button
//add window listener for keyboard input

//global variables
let currentOperator;
let counter = 0;
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
    //if counter >  1 replace previous with total
    temp = currentOperand;                  //1
    let value = stringToHTML(temp+" =");    //1 =
    previousItemDisplay.appendChild(value);
    let tempFloat = parseFloat(temp);       //1-int
    let previousOperandFloat = parseFloat(previousOperand); //1-int
    total += equation(currentOperator, previousOperandFloat, tempFloat); //2-int
    
    currentItemDisplay.innerHTML = "";  
    currentItemDisplay.appendChild(stringToHTML(total));  //2
}

function numbers() {
    let currentNumber = this.textContent;     //1-string
    let value = stringToHTML(currentNumber);  //1
    currentItemDisplay.appendChild(value);    //1childnode
    currentOperand += currentNumber;          //1 "" 1
}   

function operators() {
    currentItemDisplay.innerHTML = "";
    currentOperator = this.textContent;       //+
    //testing out syntax I learned from wes bos videos :D
    if(counter === 0) {     
        previousOperand += `${currentOperand} ${currentOperator} `; //1 + 
    } else { //need to clear here
    //temp = previousOperand;
    previousOperand = total; //2************************ 
    previousItemDisplay.innerHTML = "";
    let value1 = stringToHTML(`${previousOperand} ${currentOperator}`); //2
    previousItemDisplay.appendChild(value1);
    return;
    //append this together with operator but dont clear current display
    }
    let value = stringToHTML(previousOperand);      //1 +
    previousItemDisplay.appendChild(value);         //1 +
    previousOperand = currentOperand;               //1
    console.log(temp);                              //0
    console.log(previousOperand);                   //1
    currentOperand = "";                            //""
    counter++;                                      //1
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

