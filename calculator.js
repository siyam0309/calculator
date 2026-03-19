const display = document.getElementById('display');
const historyList = document.getElementById('history-list');

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const expression = display.value;
        const result = eval(expression); // Note: eval works for simple math; for production, use a math parser.
        
        if (expression !== "") {
            addToHistory(expression, result);
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}

function addToHistory(expr, res) {
    const li = document.createElement('li');
    li.textContent = `${expr} = ${res}`;
    historyList.prepend(li); // Adds new history to the top
}

function clearHistory() {
    historyList.innerHTML = '';
}