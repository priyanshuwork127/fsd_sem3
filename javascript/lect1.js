const display = document.getElementById('display');
let currentValue = '0';
let operator = null;
let waitingForSecondValue = false;

function updateDisplay() {
    display.textContent = currentValue;
}

function inputNumber(number) {
    if (waitingForSecondValue) {
        currentValue = number;
        waitingForSecondValue = false;
    } else {
        currentValue = currentValue === '0' ? number : currentValue + number;
    }
}

function inputDecimal(dot) {
    if (waitingForSecondValue) {
        currentValue = '0.';
        waitingForSecondValue = false;
        return;
    }
    if (!currentValue.includes(dot)) {
        currentValue += dot;
    }
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentValue);
    if (operator && waitingForSecondValue) {
        operator = nextOperator;
        return;
    }

    if (operator === null) {
        display.textContent = currentValue;
    } else {
        const result = performCalculation(operator, parseFloat(display.textContent), inputValue);
        currentValue = String(result);
        display.textContent = currentValue;
    }

    waitingForSecondValue = true;
    operator = nextOperator;
}

function performCalculation(op, first, second) {
    switch (op) {
        case '+': return first + second;
        case '-': return first - second;
        case '*': return first * second;
        case '/': return second === 0 ? 'Error' : first / second;
        default: return second;
    }
}

function clearCalculator() {
    currentValue = '0';
    operator = null;
    waitingForSecondValue = false;
    display.textContent = '0';
}

function deleteLast() {
    if (waitingForSecondValue) return;
    currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : '0';
    display.textContent = currentValue;
}

function applyPercent() {
    const value = parseFloat(currentValue);
    currentValue = String(value / 100);
    display.textContent = currentValue;
}

updateDisplay();

document.querySelector('.buttons').addEventListener('click', (event) => {
    const target = event.target;
    if (!target.matches('button')) return;

    if (target.dataset.number) {
        const number = target.dataset.number;
        if (number === '.') {
            inputDecimal(number);
        } else {
            inputNumber(number);
        }
        updateDisplay();
        return;
    }

    const action = target.dataset.action;
    switch (action) {
        case 'operator':
            handleOperator(target.textContent);
            break;
        case 'equals':
            if (operator && !waitingForSecondValue) {
                handleOperator(operator);
                operator = null;
                waitingForSecondValue = false;
            }
            break;
        case 'clear':
            clearCalculator();
            break;
        case 'delete':
            deleteLast();
            break;
        case 'percent':
            applyPercent();
            break;
    }
});
