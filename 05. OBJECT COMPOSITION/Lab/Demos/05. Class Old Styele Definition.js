//ES2015+ classes
"use strict";
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (!newName) {
            throw new Error('Invalid name');
        }
        this._name = newName;
    }

    toString() {
        return `${this.name} ${this.age}`;
    }
}

//Before ES2015 class definition
"use strict";
var Student = /** @class */ (function () {
    //Every function has prototype object
    //Student act and like constructor function
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }

    //Properties are defined with Object.defineProperty
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (!newName) {
                throw new Error('Invalid name');
            }
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });

    //Functions are set into prototype object of constructor function
    Student.prototype.toString = function () {
        return this.name + " " + this.age;
    };
    return Student;
}());