let board = document.querySelector('.calculator-board');
let currentNumber = '';
let previousNumber;
let operator;

board.addEventListener('click', (event) => {
    let button = event.target.closest('BUTTON');
    if (!button) { return; }
    // if a number clicked
    if (button.classList.contains('btn-number')) {
        currentNumber += event.target.textContent;
    }
    // if an operator clicked
    if (button.classList.contains('btn-operator')) {
        if (currentNumber == '') { currentNumber = '0'}
        previousNumber = currentNumber;
        currentNumber = '';
        operator = event.target.textContent;
    }
    console.log(1, currentNumber)
    console.log(2, previousNumber)
    console.log(3, operator)
})
