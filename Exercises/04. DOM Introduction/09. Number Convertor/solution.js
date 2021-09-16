function solve() {

    let selectMenuToElement = document.getElementById("selectMenuTo");

    let firstOptionElement = selectMenuToElement.children[0];
    firstOptionElement.setAttribute("value", "binary");
    firstOptionElement.innerHTML = 'Binary'

    let newOptionElement = document.createElement('option');
    newOptionElement.setAttribute("value", "hexadecimal");
    newOptionElement.innerHTML = "Hexadeicmal";

    selectMenuToElement.appendChild(newOptionElement);

    let buttonElement = document.getElementsByTagName('button')[0];
    buttonElement.addEventListener("click", onClickButtonElementEventHandler);

    function onClickButtonElementEventHandler(e) {
        let numberElement = document.getElementById("input");

        if (!numberElement.value) {
            return
        }

        let number = Number(numberElement.value);

        let targetValue = selectMenuToElement.value;
        let resultElement = document.getElementById("result");

        let result = '';

        if (targetValue === 'binary') {
            result = number.toString(2);
        }

        if (targetValue === 'hexadecimal') {
            result = number.toString(16).toUpperCase();
        }

        resultElement.value = result;
    }
}