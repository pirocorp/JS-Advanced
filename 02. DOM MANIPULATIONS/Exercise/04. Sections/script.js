function create(inputStrings) {
    const divFactory = (function() {
        const CONST = {
            DIV: 'div',
            P: 'p',
            INITIAL_DISPLAY: 'none',
            EVENT_DISPLAY: 'block',
            EVENT: 'click'
        }
        
        const divTemaplate = document.createElement(CONST.DIV);
        const innerPElement = document.createElement(CONST.P);
        innerPElement.style.display = CONST.INITIAL_DISPLAY;

        divTemaplate.appendChild(innerPElement);

        return function (string) {
            innerPElement.textContent = string;
            const currentDivItem = divTemaplate.cloneNode(true);

            function displayHidden(e) {
                const innerPElement = e.currentTarget.firstChild;
                innerPElement.style.display = CONST.EVENT_DISPLAY;
                e.currentTarget.removeEventListener(CONST.EVENT, displayHidden)
            }

            currentDivItem.addEventListener(CONST.EVENT, displayHidden);

            return currentDivItem;
        }
    })();

    const contentElement = document.getElementById('content');

    for (const string of inputStrings) {
        const currentDiv = divFactory(string);
        contentElement.appendChild(currentDiv);
    }
}