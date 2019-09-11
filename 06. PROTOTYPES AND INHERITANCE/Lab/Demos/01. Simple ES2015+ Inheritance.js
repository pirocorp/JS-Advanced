class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

//class Teacher inherits class Person
class Teacher extends Person {
    constructor(name, email, subject) {
        //Invoke the parent constructor
        //You must use super before you can use this
        super(name, email);
        this.subject = subject;
    }

    toString() {
        //super.toString() - Invoke toString() from the base (parent) class
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, subject: ${this.subject})`;
    }
}

//class Student inherits class Person
class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }

    toString() {
        //super.toString() - Invoke toString() from the base (parent) class
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, course: ${this.course})`;
    }
}

//Prototype Chain(for Classes)
console.log(Teacher.__proto__ == Person); // true // The same as the bellow (unofficial property)
console.log(Object.getPrototypeOf(Teacher) == Person); // true (class prototype holds the parent class)
console.log(Object.getPrototypeOf(Person) == Function.prototype); // true //Prototype of root class is function. class is syntactic suggar
console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype);//true //Prototype of Function.prototype is Object
console.log(Object.getPrototypeOf(Object.prototype) == null); //The end of Class prototype chain

console.log(`--------------------------------------`);

const student = new Student('Pesho Hristov', 'ph@email.com', 'JS');

//Prototype Chain(for Objects / Instances)
console.log(student.__proto__ == Student.prototype); // true //Same as the bellow (unofficial property)
console.log(Object.getPrototypeOf(student) == Student.prototype); //true (instance prototype holds the prototype of its class)
console.log(Object.getPrototypeOf(Student.prototype) == Person.prototype); //true //prototype of Student.prototype is Person.prototype
console.log(Object.getPrototypeOf(Person.prototype) == Object.prototype); //true //prototype of Person.prototype is Object.prototype
console.log(Object.getPrototypeOf(Object.prototype) == null); //The end of Object prototype chain

console.log(`---------------------------------------`);
console.log(Student.__proto__ != Student.prototype); //True __proto__ point to the prototype of Student, while the prototype is the prototype of instances of Student

//Prototypes in classes / functions
//Classes use their __proto__ to resolve methods / properties
//Classes __proto__ holds the parent class / function
//Classes have also prototype object used to create nеw objects
//Classes prototype object is Assigned to __proto__ of each new object

//Prototypes in objects
//Objects use their __proto__ to resolve methods / properties
//Objects do not have prototype object