const { isOddOrEven } = require('../02. Even Or Odd');
const { expect } = require('chai');

describe('02. Even Or Odd', () => {
    describe('General Tests', () => {
        it('Expect isOddOrEven to be function', () => {
            expect(typeof isOddOrEven).to.be.equal('function')
        });
    });

    describe('Valid Tests', () => {
        it('Expect isOddOrEven("") to be even', () => {
            expect(isOddOrEven('')).to.be.equal('even');
        });

        it('Expect isOddOrEven("a") to be odd', () => {
            expect(isOddOrEven('a')).to.be.equal('odd');
        });

        it('Expect isOddOrEven("ab") to be even', () => {
            expect(isOddOrEven('ab')).to.be.equal('even');
        });

        it('Expect isOddOrEven("abc") to be odd', () => {
            expect(isOddOrEven('abc')).to.be.equal('odd');
        });
    });

    describe('Invalid Inpur Tests', () => {
        it('Expect isOddOrEven() to be undefined', () => {
            expect(isOddOrEven()).to.be.undefined;
        });

        it('Expect isOddOrEven(4) to be undefined', () => {
            expect(isOddOrEven(4)).to.be.undefined;
        });

        it('Expect isOddOrEven([]) to be undefined', () => {
            expect(isOddOrEven([])).to.be.undefined;
        });

        it('Expect isOddOrEven([1, 2]) to be undefined', () => {
            expect(isOddOrEven([1, 2])).to.be.undefined;
        });

        it('Expect isOddOrEven({}) to be undefined', () => {
            expect(isOddOrEven({})).to.be.undefined;
        });

        it('Expect isOddOrEven(undefined) to be undefined', () => {
            expect(isOddOrEven(undefined)).to.be.undefined;
        });

        it('Expect isOddOrEven(null) to be undefined', () => {
            expect(isOddOrEven(null)).to.be.undefined;
        });

        it('Expect isOddOrEven(true) to be undefined', () => {
            expect(isOddOrEven(true)).to.be.undefined;
        });

        it('Expect isOddOrEven(false) to be undefined', () => {
            expect(isOddOrEven(false)).to.be.undefined;
        });
    });
});

//Another tests