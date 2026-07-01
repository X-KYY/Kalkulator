let board = document.querySelector('.calculator-board');
let output = document.querySelector('.output');
let reOutput = document.querySelector('.reOutput');
let currentNumber = '';
let previousNumber;
let operator;

board.addEventListener('click', (event) => {
    let button = event.target.closest('BUTTON');
    if (!button) { return; }
    // if a number clicked
    if (button.classList.contains('number')) {
        currentNumber += event.target.textContent;
        output.textContent = currentNumber;
    }
    // if an operator clicked
    if (button.classList.contains('operator')) {
        if (currentNumber == '') {
            currentNumber = '0';
        } else if (operator !== undefined) {
            operator = event.target.textContent;
            output.textContent = output.textContent.slice(0, -1);
            return output.append(operator)
        }
        previousNumber = currentNumber;
        operator = event.target.textContent;
        output.append(operator)
    }
})
