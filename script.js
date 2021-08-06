//selectors
const previousItem = document.getElementById("previous-item");
const currentItem = document.getElementById("current-item");
const allButtons = document.querySelectorAll(".btn");

//event listeners
allButtons.forEach((button) => {
    button.addEventListener("click", buttonEvents);
});


//functions
function buttonEvents(e) {
    let val;
    if(e.target.classList.contains("all-clear-btn")) {
        val = document.querySelector(".all-clear-btn").innerHTML;
    } else if(e.target.classList.contains("number-btn")) {
        val = document.querySelector(".number-btn").innerHTML;
    }
    console.log(val);
}

// daily 1 hour coding :)
/* accomplished aug 6,
   tried adding event listener on all buttons
   figured out that you need to select unique button type
*/
/*  aug 7 goal
    take textcontent/innerhtml of each button when pressed in succession - basically fix event listener
*/

/* goals
figure out which button was selected
append whatever value is pressed remember to convert to string
make other functions to execute action based on what button
cycle through button clicks
create function for each operation
*/
