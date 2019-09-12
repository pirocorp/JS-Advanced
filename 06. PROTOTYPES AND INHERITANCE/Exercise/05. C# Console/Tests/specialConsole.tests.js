const { expect } = require('chai');
const { Console } = require('../specialConsole');

describe('05. C# Console Tests', () => { 
    describe('General Tests', () => {
        it('Expect Console to be function', () => {
            expect(typeof Console).to.be.equal('function');
        });
    });

    describe('Constructor Tests', () => {
        //For not Static classes
        /* it('Expect Console() to throw TypeError', () => {
            expect(Console).to.throw(TypeError);
        });

        it('Expect new Console() to return object', () => {
            expect(typeof new Console()).to.be.equal('object')
        }); */

        it('Expect Console.writeLine to be function', () => {
            expect(typeof Console.writeLine).to.be.equal('function');
        });

        it('Expect Console.writeLine to be RegExp', () => {
            expect(Console.placeholder.constructor.name).to.be.equal('RegExp');
        }); 
    });

    describe('Valid Test', () => {
        it('Expect Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7); to return "The sum of 3 and 4 is 7"', () => {
            expect(Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7)).to.be.equal("The sum of 3 and 4 is 7");
        });
        
        it('Expect Console.writeLine("{0} {1} {2} {3} {4} {5} {6} {7} {8} {9} {10}", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11); to return "1 2 3 4 5 6 7 8 9 10 11"', () => {
            expect(Console.writeLine("{0} {1} {2} {3} {4} {5} {6} {7} {8} {9} {10}", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).to.be.equal("1 2 3 4 5 6 7 8 9 10 11");
        });

        it('Expect Console.writeLine("The sum of {0} and {1} is {2}"); to return "The sum of {0} and {1} is {2}"', () => {
            expect(Console.writeLine("The sum of {0} and {1} is {2}")).to.be.equal("The sum of {0} and {1} is {2}");
        });

        it('Expect Console.writeLine(someObj); to be equal to JSON.stringify(someObj);', () => {
            const someObj = {
                name: 'Piroman',
                age: 66,
                innerOnj: {
                    A: 'aaa',
                    B: 33,
                },
            };
            expect(Console.writeLine(someObj)).to.be.equal('{"name":"Piroman","age":66,"innerOnj":{"A":"aaa","B":33}}');
        });
    });

    describe('Invalid Tests', () => {
        it('If first argument is not a string throws TypeError', () => {
            const someObj = {
                name: 'Piroman',
                age: 66,
                innerOnj: {
                    A: 'aaa',
                    B: 33,
                },
            };
            expect(function () { Console.writeLine(someObj, 'a')}).to.throw(TypeError);
        });

        it('If there is more placeholders then parameters throw RangeError', () => {
            
            expect(function () { Console.writeLine("The sum of {0} and {1} is {2}", 3, 4) }).to.throw(RangeError);
        });

        it('If there is more parameters then placeholders throw RangeError', () => {

            expect(function () { Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7, 8) }).to.throw(RangeError);
        });

        it('If there is no such parameter index throw RangeError', () => {

            expect(function () { Console.writeLine("The sum of {0} and {1} is {3}", 3, 4, 7) }).to.throw(RangeError);
        });
    });
});