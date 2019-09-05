class Test { 
    constructor() {

    }
}

function testFunction() {
    console.log(this);
}

const test = new Test();
test.testFunction = testFunction;

//this rulls in declarative functions
//this depends on where function is called
//this points to global object
testFunction();

//this points to test object
test.testFunction();

//arrow function is declared on window object
test.bar = () => console.log(this);
test.bar();