function solve() {
    let elements = [];

    function _sortElements() {
        elements.sort((a, b) => a - b);
    }

    function _validIndex(index) {
        const arrSize = elements.length;

        if(index < 0) {
            return false;
        }

        if (index >= arrSize) {
            return false;
        }

        return true;
    }

    return {
        size: 0,

        add: function(element) {
            elements.push(element);
            this.size++;
            _sortElements();
        },

        remove: function(index) {
            if(_validIndex(index)) {
                elements.splice(index, 1);
                this.size--;
            }
        },

        get: function(index) {
            if(_validIndex(index)) {
                return elements[index];
            }
        }        
    }
}

const sortedList = solve();
sortedList.add();