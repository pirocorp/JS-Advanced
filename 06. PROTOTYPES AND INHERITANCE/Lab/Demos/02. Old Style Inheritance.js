//-----------like new class-----------------------------
//Constructor function Person
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };

    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

//Add functions to prototype object of constructor function Person
//the func.prototype property of functions, which specifies the [[Prototype]] to be assigned to 
//all instances of objects created by the given function when used as a constructor.
Person.prototype.bio = function () {
    // First define a string, and make it equal to the part of
    // the bio that we know will always be the same.
    var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
    // define a variable that will contain the pronoun part of
    // the sencond sentence
    var pronoun;
    // check what the value of gender is, and set pronoun
    // to an appropriate value in each case
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        pronoun = 'He likes ';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        pronoun = 'She likes ';
    } else {
        pronoun = 'They like ';
    }
    // add the pronoun string on to the end of the main string
    string += pronoun;
    // use another conditional to structure the last part of the
    // second sentence depending on whether the number of interests
    // is 1, 2, or 3
    if (this.interests.length === 1) {
        string += this.interests[0] + '.';
    } else if (this.interests.length === 2) {
        string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else {
        // if there are more than 2 interests, we loop through them
        // all, adding each one to the main string followed by a comma,
        // except for the last one, which needs an and & a full stop
        for (var i = 0; i < this.interests.length; i++) {
            if (i === this.interests.length - 1) {
                string += 'and ' + this.interests[i] + '.';
            } else {
                string += this.interests[i] + ', ';
            }
        }
    }
    // finally, with the string built, we alert() it
    alert(string);
};

//Add function to prototype object of constructor function Person
Person.prototype.greeting = function () {
    alert('Hi! I\'m ' + this.name.first + '.');
};

//Add function to prototype object of constructor function Person
Person.prototype.farewell = function () {
    alert(this.name.first + ' has left the building. Bye for now!');
}

//-----------like new class-----------------------------

//Constructor function Teacher
function Teacher(first, last, age, gender, interests, subject) {
    //this is context from wich Person constructor function is called
    //So here Person's this will be equal to this in Teacher
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}

//Create a new object and make it the value of Teacher.prototype
//The new object has Person.prototype as its prototype and will therefore inherit, 
//if and when needed, all the methods available on Person.prototype.
Teacher.prototype = Object.create(Person.prototype);

//Now Teacher.prototype.constructor should return Teacher()
//Teacher.prototype.constructor = Teacher; -> short
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

//Add function to prototype object of constructor function Teacher
//An inherited function acts just as any other property, including property shadowing (in this case, a form of method overriding).
Teacher.prototype.greeting = function() {
    var prefix;

    if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        prefix = 'Mr.';
    } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = 'Mrs.';
    } else {
        prefix = 'Mx.';
    }

    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

//-----------like new class-----------------------------

//Constructor function Student
function Student(first, last, age, gender, interests) {
    Person.call(this, first, last, age, gender, interests);
}

//Create a new object and make it the value of Teacher.prototype
//The new object has Person.prototype as its prototype and will therefore inherit it
Student.prototype = Object.create(Person.prototype);

//Now Student.prototype.constructor should return Student()
Student.prototype.constructor = Student;

//Add function to prototype object of constructor function Student
Student.prototype.greeting = function() {
    alert('Yo! I\'m ' + this.name.first + '.');
};

//A "constructor" in JavaScript is "just" a function that happens to be called with the new operator.
const student = new Student('A', 'B', 22, 'M', ['X', 'Y']);
//The student.prototype property represents the student prototype object.
student.prototype

//Object member summary
//Those defined inside a constructor function that are given to object instances.These are fairly 
//easy to spot — in your own custom code, they are the members defined inside a constructor using the this.x = x type lines; 
//in built in browser code, they are the members only available to object instances(usually created by calling a constructor 
//using the new keyword, e.g.var myInstance = new myConstructor()).

//Those defined directly on the constructor themselves, that are available only on the constructor.
//These are commonly only available on built -in browser objects, and are recognized by being chained directly onto a constructor, 
//not an instance.For example, Object.keys().

//Those defined on a constructor's prototype, which are inherited by all instances and inheriting object classes. 
//These include any member defined on a Constructor's prototype property, e.g.myConstructor.prototype.x().

//Because of the way JavaScript works, with the prototype chain, etc., the sharing of functionality between objects is often called delegation. 
//Specialized objects delegate functionality to a generic object type.