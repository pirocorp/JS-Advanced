const sum = require('../04. Sum of Numbers');
const { expect } = require('chai');

describe('04. Sum of Numbers Tests', () => {
    describe('General Tests', () => {
        it('Expect sum to be function', () => {
            expect(typeof sum).to.be.equal('function')
        });
    });
    
    describe('Valid Tests', () => {
        it('Expect sum([1, 2, 3]) to be equal to 6', () => {
            const expected = 6;

            const actual = sum([1, 2, 3]);

            expect(actual).to.be.equal(expected);
        });

        it('Expect sum([-1, 2, -3]) to be equal to -2', () => {
            const expected = -2;

            const actual = sum([-1, 2, -3]);

            expect(actual).to.be.equal(expected);
        });

        it("Expect sum(['1', '2', '3', 4]) to be equal to 10", () => {
            const expected = 10;

            const actual = sum(['1', '2', '3', 4]);

            expect(actual).to.be.equal(expected);
        });

        it("Expect sum(['1']) to be equal to 1", () => {
            const expected = 1;

            const actual = sum(['1']);

            expect(actual).to.be.equal(expected);
        });

        it("Expect sum([1]) to be equal to 1", () => {
            const expected = 1;

            const actual = sum([1]);

            expect(actual).to.be.equal(expected);
        });

        it("Expect sum([]) to be equal to 0", () => {
            const expected = 0;

            const actual = sum([]);

            expect(actual).to.be.equal(expected);
        });

        it("Expect sum([[], 3, 5]) to be equal to 8", () => {
            const expected = 8;

            const actual = sum([[], 3, 5]);

            expect(actual).to.be.equal(expected);
        });

        it("Expect sum([[], 3, 5]) to be equal to 0", () => {
            const expected = 0;

            const actual = sum([], 3, 5);

            expect(actual).to.be.equal(expected);
        });

        it("Expect sum([[2, 7, 9], 3, 5]) to be equal to 18", () => {
            const expected = 18;

            const actual = sum([2, 7, 9], 3, 5);

            expect(actual).to.be.equal(expected);
        });

        it("Expect sum([2, null, 3]) to be 5", () => {
            const expected = 5;

            const actual = sum([2, null, 3]);

            expect(actual).to.be.equal(expected);
        });

        it("Expect sum([2, true, 3]) to be 6", () => {
            const expected = 6;

            const actual = sum([2, true, 3]);

            expect(actual).to.be.equal(expected);
        });

        it("Expect sum([2, false, 3]) to be 5", () => {
            const expected = 5;

            const actual = sum([2, false, 3]);

            expect(actual).to.be.equal(expected);
        });
    });

    describe('Inalid Tests', () => {
        it("Expect sum(1, 2, 3) to throw error: is not iterable", () => {
            const errorMsg = "is not iterable";
            const typeOfError = 'TypeError';

            try{
                sum(1, 2, 3);
            } catch (ex) {
                expect(ex.message).to.include(errorMsg);
                expect(ex.name).to.include(typeOfError, 'Wrong error type');
            }  
        });

        it("Expect sum([{}, 2, 3]) to be NaN", () => {
            const actual = sum([{}, 2, 3]);

            expect(actual).to.be.NaN;
        });

        it("Expect sum([[1, 2], 2, 3]) to be NaN", () => {
            const actual = sum([[1, 2], 2, 3]);

            expect(actual).to.be.NaN;
        });

        it("Expect sum(['asd', 2, 3]) to be NaN", () => {
            const actual = sum(['asd', 2, 3]);

            expect(actual).to.be.NaN;
        });

        it("Expect sum([2, undefined, 3]) to be NaN", () => {
            const actual = sum([2, undefined, 3]);

            expect(actual).to.be.NaN;
        });    
    });
});
