let history = [];

function clearDisplay() {
    document.getElementById('output-value').innerText = '';
    document.getElementById('history-value').innerText = '';
    history = [];
}

function deleteChar() {
    let output = document.getElementById('output-value');
    output.innerText = output.innerText.slice(0, -1);
}

function appendChar(char) {
    document.getElementById('output-value').innerText += char;
}

function calculate() {
    let output = document.getElementById('output-value');
    let expression = output.innerText;

    try {
        let result = eval(expression.replace(/log/g, 'Math.log').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan'));
        history.push(`${expression} = ${result}`);
        output.innerText = result;
        document.getElementById('history-value').innerText = history.join('\n');
    } catch (e) {
        output.innerText = 'Erro';
    }
}

document.getElementById('clear').onclick = clearDisplay;
document.getElementById('backspace').onclick = deleteChar;
document.querySelectorAll('.number, .operator').forEach(button => {
    button.onclick = () => appendChar(button.innerText);
});
document.getElementById('=').onclick = calculate;
