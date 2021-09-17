function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName('button');
    const encodeButton = buttons[0];
    const decodeButton = buttons[1];

    function encodeMessage(e) {
        const inputTextarea = e.currentTarget.parentElement.querySelector('textarea');
        const outputTextarea = document.querySelector('textarea:disabled');

        const inputValue = inputTextarea.value;
        let result = '';

        for (let i = 0; i < inputValue.length; i++) {
            result += String.fromCharCode(inputValue.charCodeAt(i) + 1);
        }

        outputTextarea.value = result;
        inputTextarea.value = '';
    }

    function decodeMessage(e) {
        const textarea = e.currentTarget.parentElement.querySelector('textarea');

        const inputValue = textarea.value;
        let result = '';

        for (let i = 0; i < inputValue.length; i++) {
            result += String.fromCharCode(inputValue.charCodeAt(i) - 1);
        }

        textarea.value = result;
    }

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);
}