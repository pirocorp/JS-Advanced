class Employee {
    /**
     * 
     * @param {String} name 
     * @param {Number} age 
     * @param {String} position 
     */
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    toString() {
        return `${this.name}, ${this.age} (${this.position})`;
    }
}

module.exports = Employee;