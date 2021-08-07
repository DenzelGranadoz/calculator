//global variables
let currentOperand = "";
let previousOperand = "";

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

function deleteBtn() {
    //checking if node is empty, return if true to avoid console error
    if(currentItemDisplay.firstChild === null) {
        return;
    } else {
    currentItemDisplay.removeChild(currentItemDisplay.lastChild);
    }
}

function equal() {
    console.log("This is equal");
}

function numbers(e) {
    let currentNumber = this.textContent;
    let value = stringToHTML(currentNumber);
    currentItemDisplay.appendChild(value);
    currentOperand += currentNumber;
}

function operators() {
    currentItemDisplay.innerHTML = "";
    let currentOperator = this.textContent;
    //testing out syntax I learned from wes bos videos :D
    previousOperand += `${currentOperand}${currentOperator}`;
    currentOperand = "";
    console.log(currentOperand);
    let value = stringToHTML(previousOperand);
    previousItemDisplay.appendChild(value);
    
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
   take textcontent/innerhtml of each button when pressed in succession - basically fixed event listener
   managed to convert string into node which fixed appending problem
*/
/*  aug 8 goal
    finish working on operators function
    start equal function
*/