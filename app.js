/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');



/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let operator = '';
let previousInput = '';
let firstOperand = null;



/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');




/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {  //this line iterates in the elements of the buttons
    button.addEventListener('click', () => { //an event listener is added that lis listens to the click
      const value = button.textContent;  // this line of code gets the cotent upon clicked and shows a value
     console.log(event.target.innerText); //when logged to the console the result is shown
    
 
     

/*-------------------------------- Functions --------------------------------*/
if (button.classList.contains('number')) {
  handleNumber(value);
} else if (button.classList.contains('operator')) {
  handleOperator(value);
} else if (button.classList.contains('equals')) {
  handleEquals();
}
});
});

function handleNumber(value) {
currentInput += value;
display.textContent = currentInput;
}

function handleOperator(value) {
if (value === 'C') {
resetCalculator();
} else {
operator = value;
firstOperand = parseFloat(currentInput);  // parseFloat is used to convert the string input from the user into a number that can be used in arithmetic operations to ensure the iput are treated as numbers and not as strings to allow for smooth mathematical operations
currentInput = '';
}
}

function handleEquals() {
if (operator && firstOperand !== null) {
const secondOperand = parseFloat(currentInput);
const result = calculateResult(firstOperand, secondOperand, operator);
display.textContent = result;
currentInput = result.toString();
operator = '';
firstOperand = null;
}
}

function calculateResult(first, second, operator) {
switch (operator) { //this statement makes calculations based on the operator and returns the result
case '+': return first + second;
case '-': return first - second;
case '*': return first * second;
case '/': return first / second;
}
}

function resetCalculator() { //this code clears the display, managing operations and numbers
currentInput = '';
operator = '';
firstOperand = null;
let previousInput = '';
display.textContent = '';
}



