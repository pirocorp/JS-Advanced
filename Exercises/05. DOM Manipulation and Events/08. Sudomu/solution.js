function solve() {
    let buttonElements = document.getElementsByTagName('button');
    let quickCheckButtonElement = buttonElements[0];
    let clearButtonElement = buttonElements[1];

    quickCheckButtonElement.addEventListener("click", onClickQuickCheckButtonEventHandler);
    clearButtonElement.addEventListener("click", onClickClearButtonEventHandler);

    function onClickQuickCheckButtonEventHandler(e) {
        let allInputElements = Array.from(document.getElementsByTagName('input'));

        for (let i = 0; i < allInputElements.length; i++) {
            if (!checkElement(i, allInputElements)) {
                failedResult();
                return
            }
        }

        successResult();
    }

    function checkElement(i, allInputElements) {
        let currentElement = allInputElements[i].value;
        allInputElements[i] = '0';

        if (currentElement < 1 || currentElement > 3) {
            console.log('5');
            return false;
        }

        if (i % 3 === 0) {
            if (currentElement === allInputElements[0].value ||
                currentElement === allInputElements[3].value ||
                currentElement === allInputElements[6].value ||
                currentElement === allInputElements[i + 1].value ||
                currentElement === allInputElements[i + 2].value) {
                console.log('0');
                console.log(i);
                console.log(currentElement);
                console.log(allInputElements[i + 1].value);
                return false;
            }
        }

        if (i % 3 === 1) {
            if (currentElement === allInputElements[1].value ||
                currentElement === allInputElements[4].value ||
                currentElement === allInputElements[7].value ||
                currentElement === allInputElements[i + 1].value ||
                currentElement === allInputElements[i - 1].value) {
                console.log('1');
                return false;
            }
        }

        if (i % 3 === 2) {
            if (currentElement === allInputElements[2].value ||
                currentElement === allInputElements[5].value ||
                currentElement === allInputElements[8].value ||
                currentElement === allInputElements[i - 1].value ||
                currentElement === allInputElements[i - 2].value) {
                console.log('2');
                return false;
            }
        }

        return true;
    }

    function failedResult() {
        let tableElement = document.getElementsByTagName('table')[0];
        tableElement.style.border = '2px solid red';
        let resultElement = document.querySelector('#check p');
        resultElement.textContent = 'NOP! You are not done yet...';
        resultElement.style.color = 'red';
    }

    function successResult() {
        let tableElement = document.getElementsByTagName('table')[0];
        tableElement.style.border = '2px solid green';
        let resultElement = document.querySelector('#check p');
        resultElement.textContent = 'You solve it! Congratulations!';
        resultElement.style.color = 'green';
    }

    function onClickClearButtonEventHandler(e) {
        let allInputElements = Array.from(document.getElementsByTagName('input'));
        allInputElements.forEach(x => x.value = '');

        let tableElement = document.getElementsByTagName('table')[0];
        tableElement.style.border = '';

        let resultElement = document.querySelector('#check p');
        resultElement.textContent = '';
        resultElement.style.color = '';
    }
}