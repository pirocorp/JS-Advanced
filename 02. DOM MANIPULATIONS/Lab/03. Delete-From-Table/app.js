function deleteByEmail() {
    const SELECTORS = {
        INPUT_ELEMENT: '[name=email]',
        TABLE_ELEMENT: '#customers',
        RESULT_ELEMENT: '#result',
        TABLE_HEADERS: 'th',
        ROWS: 'tbody tr',
        EMAIL: 'Email'
    }

    const NOTIFICATIONS = {
        DELETED: 'Deleted.',
        NOT_FOUND: 'Not found.'
    }

    const inputEmailElement = document.querySelector(SELECTORS.INPUT_ELEMENT);
    const inputEmail = inputEmailElement.value;

    const tableElement = document.querySelector(SELECTORS.TABLE_ELEMENT);

    const resultElement = document.querySelector(SELECTORS.RESULT_ELEMENT);

    function columnIndexOfTable(headerName, tableElement){
        return [...tableElement.querySelectorAll(SELECTORS.TABLE_HEADERS)]
            .map(x => x.textContent)
            .indexOf(headerName);
    }

    function findRowWithEmailInTable(email, tableElement, mailColumn){
        return [...tableElement.querySelectorAll(SELECTORS.ROWS)]
            .find(x => x.children[mailColumn].textContent === email);
    }

    const eIndex = columnIndexOfTable(SELECTORS.EMAIL, tableElement);
    const row = findRowWithEmailInTable(inputEmail, tableElement, eIndex);
    
    if(row) {
        row.remove();
        resultElement.textContent = NOTIFICATIONS.DELETED;
    } else {
        resultElement.textContent = NOTIFICATIONS.NOT_FOUND;
    }
}