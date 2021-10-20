const { expect } = require('chai');
const testNumbers = require('./testNumbers');

describe("Test Numbers", () => {
    describe("sumNumbers", () => {
        it('works with positive nummbers', () => {
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
        });

        it('works with negative nummbers', () => {
            expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00');
            expect(testNumbers.sumNumbers(-3, 1)).to.equal('-2.00');
        });

        it('works with floating point nummbers', () => {
            expect(testNumbers.sumNumbers(1.5555, 0.3333)).to.equal('1.89');
        });

        it('returns undefined with invalid params', () => {
            expect(testNumbers.sumNumbers(1, '2')).to.undefined;
            expect(testNumbers.sumNumbers('1', 2)).to.undefined;
            expect(testNumbers.sumNumbers('1.5555', '0.3333')).to.undefined;   

            expect(testNumbers.sumNumbers([], 1)).to.undefined;
            expect(testNumbers.sumNumbers(2, null)).to.undefined;
            expect(testNumbers.sumNumbers({}, 3)).to.undefined;
            expect(testNumbers.sumNumbers(undefined, 2)).to.undefined;
            expect(testNumbers.sumNumbers(2)).to.undefined;
        });
    });

    describe("numberChecker", () => {
        it('works with odd values', () => {
            expect(testNumbers.numberChecker(1)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker('1')).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(-3)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker('-3')).to.be.equal('The number is odd!');
        });

        it('works with even values', () => {
            expect(testNumbers.numberChecker(0)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(-4)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker('-4')).to.be.equal('The number is even!');
        });

        it('detect invalid parameters', () => {
/*          expect(() => testNumbers.numberChecker('')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker('    ')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker([])).to.throw('The input is not a number!');            
            expect(() => testNumbers.numberChecker(null)).to.throw('The input is not a number!'); */

            expect(() => testNumbers.numberChecker('asd')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker({})).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(undefined)).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(NaN)).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(() => {})).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(function x() {})).to.throw('The input is not a number!');
        });
    });

    describe("averageSumArray", () => {
        it('works with integers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3,])).to.be.equal(2);
        });
        it('works with float numbers', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.be.equal(2.5);
        });
    });
});
