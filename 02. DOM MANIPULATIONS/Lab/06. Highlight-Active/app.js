function focus() {
    const CONSTANTS = {
        FUCUSED_ELEMENTS_CLASS: 'focused',
        INPUT_FIELD_SELECTOR: 'input[type=text]',
        FOCUS_EVENT: 'focus',
        BLUR_EVENT: 'blur',
    }

    function getFocusEventHandler(e) {
        e.target.parentElement.classList.add(CONSTANTS.FUCUSED_ELEMENTS_CLASS);
    }

    function lostFocusEventHandler(e) {
        e.target.parentElement.classList.remove(CONSTANTS.FUCUSED_ELEMENTS_CLASS)
    }

    const inputFields = document.querySelectorAll(CONSTANTS.INPUT_FIELD_SELECTOR);
    [...inputFields].forEach(x => {
        x.addEventListener(CONSTANTS.FOCUS_EVENT, getFocusEventHandler);
        x.addEventListener(CONSTANTS.BLUR_EVENT, lostFocusEventHandler);
    });
}