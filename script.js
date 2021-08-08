//global variables
let currentOperator;
let currentOperand = "";
let previousOperand = "";
let temp = "";
let counter = 0;

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
    let value = stringToHTML(temp);
    previousItemDisplay.appendChild(value);

    let tempInt = parseInt(temp);
    console.log(tempInt);
    let previousOperandInt = parseInt(previousOperand);
    console.log(previousOperandInt);
    //run this in a function with switch case
    return console.log(equation(currentOperator, tempInt, previousOperandInt));
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
        previousOperand += `${currentOperand}${currentOperator}`;
    } else {
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
            return sum(a,b);
    }
}

function sum(a, b) {
    return a + b;
}
// to do on operators function
// after appending, previousOperand should only have the total value from last equation
// work on equal function to figure it out
/* create function
    global variable that holds current number string
    takes in current string in currentItem
    add operator symbol
    append whole thing to previous item
*/

function stringToHTML(str) {
    let newNode = new DOMParser().parseFromString(str, 'text/html');
    return newNode.body.firstChild;
}

function toString(str) {
    return str.toString();
}

// daily 1 hour coding :)
/* accomplished aug 7,
    continue working on operators function
*/
/*  aug 8 goal
    finish working on operators function
    start equal function
*/