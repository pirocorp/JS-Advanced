//Inheritance example
class Rectangle {
    constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    get area() {
        return this.height * this.width;
    }
}

//Square extends (inherit) Rectangle
class Square extends Rectangle {
    constructor(length) {
        this.height; // ReferenceError, super needs to be called first!

        // Here, it calls the parent class's constructor with lengths
        // provided for the Rectangle's width and height
        super(length, length);

        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error. 
        this.name = 'Square';
    }
}

//One may also extend traditional function-based "classes":
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

//Note that classes cannot extend regular (non-constructible) objects. 
//If you want to inherit from a regular object, you can instead use 
//Object.setPrototypeOf():
const Animal = {
    speak() {
        console.log(this.name + ' makes a noise.');
    }
};

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.

//The super keyword is used to call corresponding methods of super class. 
//This is one advantage over prototype-based inheritance.
class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars.`);
    }
}

let l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.