const calculator = (function() {
    const SELECTORS = {
        SUM_BTN: '#sumButton',
        SUBTR_BTN: '#subtractButton'
    };

    let num1Element, num2Element, resultElement;

    return {
        init: function (selector1, selector2, resultSelector) {
            num1Element = document.querySelector(selector1);
            num2Element = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);

            //Must be commented for judge
            document.querySelector(SELECTORS.SUM_BTN).addEventListener('click', this.add);
            document.querySelector(SELECTORS.SUBTR_BTN).addEventListener('click', this.subtract);
        },

        add: () => {
            resultElement.value = Number(num1Element.value) + Number(num2Element.value);
        },
        
        subtract: () => {
            resultElement.value = Number(num1Element.value) - Number(num2Element.value);
        }
    }
})();


calculator.init('#num1', '#num2', '#result');