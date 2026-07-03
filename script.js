let board = document.querySelector('.calculator-board');
let output = document.querySelector('.output');
let reOutput = document.querySelector('.reOutput');
let currentNumber = '';
let previousNumber = '';
let operator;
let is2ndNumber = false;

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    calc = {
        "+": a + b,
        "-": a - b,
        "×": a * b,
        "÷": a / b
    }
    return calc[operator];
}

board.addEventListener('click', (event) => {
    let button = event.target.classList[1];
    let value = event.target.textContent;
    if (!event.target.closest('BUTTON')) {
        return;
    }

    switch(button) {
        case 'number':
            output.textContent += value;
            currentNumber += value;
            break;

        case 'operator':
            if (currentNumber == '') {
                currentNumber = previousNumber;
                previousNumber = '';
            }
            if (previousNumber) {
                previousNumber = operate(operator, previousNumber, currentNumber);
                console.log(previousNumber)
            } else {
                previousNumber = currentNumber;
            }
            output.textContent += value;
            operator = value;
            currentNumber = '';
            break;

        case 'clear':
            output.textContent = '';
            currentNumber = '';
            previousNumver = '';
            operator = '';
            break;

        case 'delete':
            if (output.textContent.at(-1) == operator) {
                operator = '';
                console.log('ini', operator)
                console.log(previousNumber)
            } else if (output.textContent.at(-1) == number) {
                
            }
            output.textContent = output.textContent.slice(0, -1);
            break;

        case 'equals': 
            output.textContent = operate(operator, previousNumber, currentNumber);
            currentNumber = '';
            previousNumber = '';
            operator = '';
            currentNumber = output.textContent;
            break;
    }

})