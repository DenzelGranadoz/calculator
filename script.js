//selectors
const previousItem = document.getElementById("previous-item");
const currentItem = document.getElementById("current-item");
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
    currentItem.innerHTML = "";
    previousItem.innerHTML = "";
}

function deleteBtn() {
    //checking if node is empty, return if true to avoid console error
    if(currentItem.firstChild === null) {
        return;
    } else {
    currentItem.removeChild(currentItem.lastChild);
    }
}

function equal() {
    console.log("This is equal");
}

function numbers(e) {
    let currentNumber = this.textContent;
    let value = stringToHTML(currentNumber);
    currentItem.appendChild(value);
}

function operators() {
    let currentOperator = this.textContent;
    let value = stringToHTML(currentOperator);
    currentItem.appendChild(value);
}

function stringToHTML(str) {
    let newNode = new DOMParser().parseFromString(str, 'text/html');
    return newNode.body.firstChild;
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