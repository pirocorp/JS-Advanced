class Numberbox {
    constructor(label, selector, minValue, maxValue) {
        this._label = label;
        this._minValue = minValue;
        this._maxValue = maxValue;
        this._elements = $(selector);
        this.value = minValue;

        this._elements.on('change', (ev) => {
            this.value = $(ev.target).val();
        });
    }

    get label() {
        return this._label;
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(inputValue) {
        if(inputValue < this._minValue || inputValue > this._maxValue) {
            throw new Error('Not a valid number');
        }

        this._value = inputValue;
        this._elements.val(inputValue);
    }
}

module.exports = Numberbox;