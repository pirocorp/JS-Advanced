function solve() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly.');
            }

            this.weight = Number(weight);
            this.melonSort = melonSort;

            this._melonType = '';
        };

        get elementIndex() {
            return this.weight * this.melonSort.length;
        };

        toString() {
            return `Element: ${this._melonType}\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`;
        }
    };

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this._melonType = 'Water';
        }
    };

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this._melonType = 'Fire';
        }
    };

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this._melonType = 'Earth';
        }
    };

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this._melonType = 'Air';
        }
    }

    //If you inherit base class Judge give error
    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this._melonType = 'Water';
            this._availableTypes = ['Fire', 'Earth', 'Air', 'Water'];
            this._currentTypeIndex = 0;
        }

        morph() {
            this._currentTypeIndex = this._currentTypeIndex % this._availableTypes.length;
            this._melonType = this._availableTypes[this._currentTypeIndex];
            this._currentTypeIndex++;
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    };
};

const { Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon } = solve();
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
