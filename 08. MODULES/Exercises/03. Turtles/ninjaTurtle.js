const Turtle = require('./turtle');

class NinjaTurtle extends Turtle {
    /**
     * 
     * @param {String} name 
     * @param {Number} age 
     * @param {String} gender 
     * @param {String} maskColor
     * @param {String} weapon
     */
    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);

        this.maskColor = maskColor;
        this.weapon = weapon;
    }

    toString() {
        let result = '\n';

        if (this.age < 25) {
            result += `${this.name.substring(0, 3)} wears a ${this.maskColor} mask, and is an apprentice with the ${this.weapon}.`;
        }
        
        if (this.age < 100 && this.age >= 25 ) {
            result += `${this.name.substring(0, 3)} wears a ${this.maskColor} mask, and is smokin strong with the ${this.weapon}.`;
        }

        if(this.age >= 100) {
            result += `${this.name.substring(0, 3)} wears a ${this.maskColor} mask, and is BEYOND GODLIKE with the ${this.weapon}.`;
        }

        return super.toString() + result;
    }
}

module.exports = NinjaTurtle;