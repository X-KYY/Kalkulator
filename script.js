let board = document.querySelector('.calculator-board');
let output = document.querySelector('.output');
let reOutput = document.querySelector('.reOutput');
let currentNumber = '';
let previousNumber = '';
let operator;
let is2ndNumber = false;

board.addEventListener('click', (event) => {
    let button = event.target.closest('BUTTON');
    if (!button) { return; }

    // if a number clicked
    if (button.classList.contains('number')) {
        // if (is2ndNumber) {
        //      = event.target.textContent;
        //     output.append(pre)
        currentNumber += event.target.textContent;
        output.append(event.target.textContent)
        console.log(currentNumber)
    }
    // if an operator clicked
    if (button.classList.contains('operator')) {
        if (currentNumber == '') {
            currentNumber = '0';
        } 
        // If there is another operator
        // if (output.textContent.at(-1) == ['+', "-"]) {
        //     operator = event.target.textContent;
        //     output.textContent = output.textContent.slice(0, -1);
        //     return output.append(operator)
        // }

        previousNumber = currentNumber;
        currentNumber = '';
        is2ndNumber = true;
        operator = event.target.textContent;
        output.append(operator)
    }
    // Delete
    if (button.classList.contains('delete')) {
        output.textContent = output.textContent.slice(0, -1);
        if (output.textContent == '') {
            currentNumber = '';
            previousNumber = '';
        }
    }
    // If equal button clicked
    if (button.classList.contains('equals')) {
        alert(currentNumber, previousNumber)
    }
})

function operate(operator, a, b) {
    calc = {
        "+": a + b,
        "-": a - b,
        "×": a * b,
        "÷": a /b
    }
    return calc[operator];
}
