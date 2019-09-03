const { expect } = require('chai');
const { lookupChar } = require('../03. Char Lookup');

describe('03. Char Lookup Tests', () => {
    describe('General Tests', () => {
        it('Expect lookupChar to be function', () => {
            expect(typeof lookupChar).to.be.equal('function');
        });
    });

    describe('Valid Tests', () => { 
        it('Expect lookupChar("abc", 0) to be "a"', () => {
            expect(lookupChar('abc', 0)).to.be.equal('a');
        });

        it('Expect lookupChar("abc", 2) to be "c"', () => {
            expect(lookupChar('abc', 2)).to.be.equal('c');
        });

        it('Expect lookupChar("abcdefghijklmn", 5) to be "c"', () => {
            expect(lookupChar('abcdefghijklmn', 5)).to.be.equal('f');
        });
    });

    describe('Invalid Tests', () => {
        describe('First Parameter Not A String', () => {
            it('Number => undefined', () => {
                expect(lookupChar(123456, 5)).to.be.undefined;
            });

            it('Empty Array => undefined', () => {
                expect(lookupChar([], 5)).to.be.undefined;
            });

            it('Array => undefined', () => {
                expect(lookupChar([1, 2, 3], 2)).to.be.undefined;
            });

            it('Object => undefined', () => {
                expect(lookupChar({}, 2)).to.be.undefined;
            });
            
            it('undefined => undefined', () => {
                expect(lookupChar(undefined, 2)).to.be.undefined;
            });

            it('null => undefined', () => {
                expect(lookupChar(null, 2)).to.be.undefined;
            });

            it('true => undefined', () => {
                expect(lookupChar(true, 2)).to.be.undefined;
            });

            it('false => undefined', () => {
                expect(lookupChar(false, 2)).to.be.undefined;
            });
        });

        describe('Second Parameter Not A Integer', () => {
            it('Float => undefined', () => {
                expect(lookupChar('Test string', 3.14)).to.be.undefined;
            });

            it('Float As String => undefined', () => {
                expect(lookupChar('Test string', '3.14')).to.be.undefined;
            });

            it('Number As String => undefined', () => {
                expect(lookupChar('Test string', '2')).to.be.undefined;
            });

            it('String => undefined', () => {
                expect(lookupChar('Test string', 'asd')).to.be.undefined;
            });

            it('Empty Array => undefined', () => {
                expect(lookupChar('Test string', [])).to.be.undefined;
            });

            it('Array => undefined', () => {
                expect(lookupChar('Test string', [1])).to.be.undefined;
            });

            it('Object => undefined', () => {
                expect(lookupChar('Test string', {})).to.be.undefined;
            });

            it('undefined => undefined', () => {
                expect(lookupChar('Test string', undefined)).to.be.undefined;
            });

            it('null => undefined', () => {
                expect(lookupChar('Test string', null)).to.be.undefined;
            });

            it('true => undefined', () => {
                expect(lookupChar('Test string', true)).to.be.undefined;
            });

            it('false => undefined', () => {
                expect(lookupChar('Test string', false)).to.be.undefined;
            });
        });

        describe('Incorect Index', () => {
            it('lookupChar("abc", -1) to be equal to "Incorrect index"', () => {
                expect(lookupChar('abc', -1)).to.be.equal("Incorrect index");
            });

            it('lookupChar("abc", 3) to be equal to "Incorrect index"', () => {
                expect(lookupChar('abc', 3)).to.be.equal("Incorrect index");
            });

            it('lookupChar("abc", 4) to be equal to "Incorrect index"', () => {
                expect(lookupChar('abc', 4)).to.be.equal("Incorrect index");
            });
        });
    });
});