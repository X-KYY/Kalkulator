let board = document.querySelector('.calculator-board');
let output = document.querySelector('.output');
let reOutput = document.querySelector('.reOutput');
const arrayOfNumber = [];
let waitingNumber = '';
let operator = '';
let integerStatus = true; //positive

function operate(array) {
    let before;
    let after;
    let indexx;
    let result;
    let newAngka;

    while (array.includes('*') || array.includes('/')) {
    for (let i = 0;i <= array.length - 1;i++) {
            before = Number(array[i - 1]);
            after = Number(array[i + 1]);
            indexx = i;
        if (array[i] == '*') {
            result = before * after;
            break;
        } else if (array[i] == '/') {
            result = before / after;
            break;
        }
    }
    newAngka = result.toString();
    array.splice(indexx - 1, 3, newAngka);
}
    if (!array.includes('*') && !array.includes('/')) {
        while (array.includes('+') || array.includes('-')) {
    for (let j = 0;j < array.length - 1;j++) {
            before = Number(array[j - 1]);
            after = Number(array[j + 1])
            indexx = j;
        if (array[j] == '+') {
            result = before + after;
             console.log('ini after', before, after)
            console.log(result)
            break;
        } else if (array[j] == '-') {
            result = before - after;
            break;
        }
    }
     console.log('on')
     newAngka = result.toString();
     array.splice(indexx - 1, 3, newAngka);
    }
        }
}

function deleteLastNumber(data) {
    if (waitingNumber !== '') {
        waitingNumber = waitingNumber.slice(0, -1);
    } else {
        let lastOfArray = data.pop();
        data[-1] = lastOfArray.slice(0, -1)
    }
}


board.addEventListener('click', (event) => {
    let button = event.target.classList[1];
    let value = event.target;

    if (!event.target.closest('BUTTON')) {
        return;
    }

    switch(button) {
        case 'number':
            if (integerStatus == false) {
                waitingNumber += '-'
            }
            if (output.textContent !== '') {
                reOutput.textContent = '';
                output.textContent = '';
            }

            reOutput.textContent += value.textContent;
            waitingNumber += value.textContent;
            break;

        case 'operator':
            if (output.textContent !== '') {
                reOutput.textContent = '';
                output.textContent = '';
            }

            if (waitingNumber !== '') {
                arrayOfNumber.push(waitingNumber)
            }

            reOutput.textContent += value.textContent;
            arrayOfNumber.push(value.value)
            waitingNumber = '';
            console.log(arrayOfNumber)
            break;

        case 'positive-negative': 
            if (integerStatus == true) {
                integerStatus = false;
                reOutput.textContent += '-';
            }
            break;

        case 'clear':
            output.textContent = '';
            reOutput.textContent = '';
            waitingNumber = '';
            arrayOfNumber.length = 0;
            break;

        case 'delete':
            reOutput.textContent = reOutput.textContent.slice(0, -1);
            output.textContent = output.textContent.slice(0, -1);
            deleteLastNumber(arrayOfNumber)
            break;

        case 'equals': 
            arrayOfNumber.push(waitingNumber)
            waitingNumber = '';
            output.textContent = operate(arrayOfNumber);
            output.textContent = arrayOfNumber;
            arrayOfNumber.length = 0;
            break;
    }

})
