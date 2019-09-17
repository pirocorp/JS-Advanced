const Turtle = require('./turtle');

class GalapagosTurtle extends Turtle {
    /**
     * 
     * @param {String} name 
     * @param {Number} age 
     * @param {String} gender 
     */
    constructor(name, age, gender) {
        super(name, age, gender);

        this._thingsEatenThisYear = [];
    }

    get thingsEaten() {
        return this._thingsEatenThisYear;
    }

    /**
     * 
     * @param {String} food 
     */
    eat(food) {
        this._thingsEatenThisYear.push(food);
    }

    grow(age) {
        super.grow(age);
        this._thingsEatenThisYear = [];
    }

    toString() {
        return super.toString() +
        `\nThings, eaten this year: ${this.thingsEaten.join(', ')}`;
    }
}

module.exports = GalapagosTurtle;