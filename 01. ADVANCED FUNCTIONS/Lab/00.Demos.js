//First-Class Functions
//Can be passed as an argument to another function

function sayHello() {
    return "Hello, ";
}

function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}

//sayHello is First-Class function and has been passed to greeting function as parameter
greeting(sayHello, "JavaScript!\n");
// Hello, JavaScript!

//----------------------------------------------------------------------------------------------

//First-Class Functions
//Can be returned by another function
//We can do that, because we treated functions in JavaScript as a value

function getSayHello() {
    return function () {
        console.log('Hello!');

    }
}  

//----------------------------------------------------------------------------------------------

//First-Class Functions
//Can be assigned as a value to a variable

const write = function () {
    console.log("Hello, world!\n");
}

//That function can be invoked by adding parentheses "()" at the end after the variable name
write(); // Hello, world!  

//----------------------------------------------------------------------------------------------

//Higher-Order Functions 
//Take other functions as an argument or return a function as a result
//In above cases greeting and getSayHello are Higher Order Functions

//getSayHello2 is Higher Order Function
const getSayHello2 = function () {
    return function () {
        console.log("Hello!\n");
    }
}

const myFunc = getSayHello2();
myFunc(); // Hello!

//----------------------------------------------------------------------------------------------

//Currying
//The process of breaking down a function into a series of functions - each takes a single argument

function sum3(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(sum3(5)(6)(8)); // 19
console.log();

//Currying Usage
//Function Composition - Building new function from oldfunction by passing arguments
//Memoization - Functions that are called repeatedly with thesame set of inputs but whose result is relatively expensive toproduce
//Handle Errors - Throwing functions and exiting immediatelyafter an error

//----------------------------------------------------------------------------------------------

//Partial Application
//Converting a function with a given number of arguments into a function with smaller number of arguments
//Pass the remaining parameters when a final result is needed
//The partially applied function can be used multiple times
//This helps write reusable code with fewer bugs
//f(x, y) = x + y => g(x) = f(1, x)

//Currying vs Partial Application
//Currying always produces nested unary functions
//Partial application produces functions of arbitrary numberof arguments
//Currying is NOT partial application
//It can be implemented using partial application

//----------------------------------------------------------------------------------------------

//Immediately-Invoked Function Expressions (IIFE)
//Define anonymous function expression
//Invoke it immediately after declaration

(function () { console.log("invoked!"); }());
(function () { console.log("invoked!"); })();
let iife = function () { console.log("invoked!"); }();
console.log();

//----------------------------------------------------------------------------------------------

//Functions Returning Functions
//A state is preserved in the outer function (closure)

//Closure with IIFE
const f = (function () {
    let counter = 0; //the state which will be preserved

    return function () {
        console.log(++counter);
    }
})();

f(); // 1
f(); // 2
f(); // 3
f(); // 4
f(); // 5
f(); // 6
f(); // 7
console.log();

//----------------------------------------------------------------------------------------------

//Function Context
//The function context is the object that "owns" the currently executed code
//Function context == "this" object

//Depends on how the function is invoked
//Global invoke: func()
//object.function()
//domElement.event()
//Using call() / apply() / bind()

//----------------------------------------------------------------------------------------------

// Window ("this" is the global context) or
// global when is run in node.js or ...

function f1() {
    console.log(this);
}

f1();
console.log();

//----------------------------------------------------------------------------------------------

// undefined ("this" is missing) because of use strict

function f2() {
    'use strict';
    console.log(this);
}

f2();
console.log();

//----------------------------------------------------------------------------------------------

//The Function Context with Object

function func() {
    console.log(this);
}

const obj1 = {
    name: 'Peter',
    f: func
};

obj1.f(); // Object {name: "Peter"}

//The Function Context for Objects
let obj = {
    name: 'Teodor',
    getName: function () {
        return this.name;  // "this" refers to "obj"
    }
};

console.log(obj.getName()); // Teodor

function Car() {
    console.log(this);
}
let car = new Car(); // Car {}
console.log();

//----------------------------------------------------------------------------------------------

//The Function Context with Inner Function

function outer() {
    console.log(this); // Object {name: "Peter"}
    function inner() {
        console.log(this); // Window or global or ...
    }
    inner();
}

const obj2 = { name: 'Peter', f: outer }
obj2.f();
console.log();

//----------------------------------------------------------------------------------------------

//The Function Context with Arrow Function

function outer() {
    const inner = () => console.log(this);
    inner();
}

const obj3 = {
    name: 'Peter',
    f: outer
};
obj3.f(); // Object {name: "Peter"}
console.log();

//----------------------------------------------------------------------------------------------

//The Function Context for DOM Events

//<button onclick="alert(this)">Click Me</button>
// Shows "[object HtmlButtonElement]" when clicked

//<button onclick="f(this)">Click Me</button>
//function f(btn) { alert(btn); };
// Shows "[object HtmlButtonElement]" when clicked

//<button onclick="f()">Click Me</button>
//function f() { alert(this); };
// Shows "[object Window]" when clicked

//----------------------------------------------------------------------------------------------

//Changing the Context: Call

const sharePersonalInfo = function () {
    console.log(`Hello, my name is ${this.name}.`);
    console.log(`I'm a ${this.profession}.\n`);
}

const firstPerson = { name: "Peter", profession: "Fisherman" };
const secondPerson = { name: "George", profession: "Manager" };

sharePersonalInfo.call(firstPerson);
// Hello, my name is Peter.
// I’m a Fisherman.

sharePersonalInfo.call(secondPerson);
// Hello, my name is George.
// I’m a Manager.

//----------------------------------------------------------------------------------------------

//Changing the Context: Apply

const firstPerson1 = {
    name: "Peter", prof: "Fisherman", shareInfo: function () {
        console.log(`${this.name} works as a ${this.prof}`);
    }
};

const secondPerson1 = { name: "George", prof: "Manager" };
firstPerson1.shareInfo.apply(secondPerson1);
// George works as a Manager

console.log();

//----------------------------------------------------------------------------------------------

//Changing the Context: Bind

const x = 42;
const getX = function () {
    return this.x;
}
const module1 = { 
    x, 
    getX 
};

const unboundGetX = module1.getX;
console.log(unboundGetX()); // undefined

const boundGetX = unboundGetX.bind(module1);
console.log(boundGetX()); // 42

console.log();

//----------------------------------------------------------------------------------------------
