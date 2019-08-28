function subtract() {
    const firstValue = document.getElementById('firstNumber').value;
    const secondValue = document.getElementById('secondNumber').value;

    const resultElement = document.getElementById('result');
    const result = Number(firstValue) - Number(secondValue);
    resultElement.textContent = result;
}