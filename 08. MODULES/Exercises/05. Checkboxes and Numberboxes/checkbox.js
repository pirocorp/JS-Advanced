class Checkbox {
    /**
     * 
     * @param {String} label 
     * @param {*} selector 
     */
    constructor(label, selector) {
        this._label = label;
        this._elements = $(selector);
        this.value = this._elements.is(':checked');

        this._elements.on('change', (ev) => {
            this.value = $(ev.target).prop('checked');
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
        if(typeof inputValue != 'boolean') {
            throw new Error('Not Boolean');
        }

        this._value = inputValue;
        this.elements.prop('checked', inputValue)
    }
}

module.exports = Checkbox;