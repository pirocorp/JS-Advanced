const Turtle = require('./turtle');

class EvkodianTurtle extends Turtle {
    /**
     * 
     * @param {String} name 
     * @param {Number} age 
     * @param {String} gender 
     * @param {Number} evkodiumValue
     */
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);

        this._evkodiumValue = evkodiumValue;
    }

    _getDensity() {
        if(this._gender === 'male') {
            return this._age * 3;
        } else if (this._gender === 'female') {
            return this._age * 2;
        }
    }

    get evkodium() {
        return {
            value: this._evkodiumValue,
            density: this._getDensity()
        }
    }

    toString() {
        const evkodium = this.evkodium;
        return super.toString() +
        `\nEvkodium: ${ evkodium.value * evkodium.density }`
    }
}

module.exports = EvkodianTurtle;