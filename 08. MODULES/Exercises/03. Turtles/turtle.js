class Turtle {
    /**
     * 
     * @param {String} name 
     * @param {Number} age 
     * @param {String} gender 
     */
    constructor(name, age, gender) {

        if (new.target === Turtle ) {
            throw new Error("Cannot instantiate an abstract class.");
        }

        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get gender() {
        return this._gender;
    }

    /**
     * 
     * @param {Number} age 
     */
    grow(age) {
        this._age += age;
    }

    toString() {
        return `Turtle: ${this.name}\n` +
               `Aged - ${this.age}; Gender - ${this.gender}`;
    }
}

module.exports = Turtle;