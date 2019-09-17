const Turtle = require('./turtle');

class WaterTurtle extends Turtle {
    /**
     * 
     * @param {String} name 
     * @param {Number} age 
     * @param {String} gender
     * @param {String} waterPool
     */
    constructor(name, age, gender, waterPool) {
        super(name, age, gender);

        this._waterPool = waterPool;
    }

    get currentWaterPool() {
        return this._waterPool;
    }

    travel(waterPool) {
        this._waterPool = waterPool;
        super.grow(5);
    }

    toString() {
        return super.toString() + `\nCurrently inhabiting ${this.currentWaterPool}`;
    }
}

module.exports = WaterTurtle;