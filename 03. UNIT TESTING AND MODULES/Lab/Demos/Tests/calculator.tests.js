const { expect } = require('chai');
const { sum, subtract } = require('../calculator');

describe('Calculator tests', () => {
    describe('sum', () => {
        describe('Valid Test', () => {
            it('Expect sum(1, 2) to be equal to 3', () => {
                const expected = 3;

                const actual = sum(1, 2);

                expect(actual).to.be.eq(expected);
            });

            it('Expect sum(1, 2, 3) to be equal to 6', () => {
                const expected = 6;

                const actual = sum(1, 2, 3);

                expect(actual).to.be.eq(expected);
            });

            it('Expect sum(-1, -2) to be equal to -3', () => {
                const expected = -3;

                const actual = sum(-1, -2);

                expect(actual).to.be.eq(expected);
            });

            it('Expect sum(0, 1) to be equal to 1', () => {
                const expected = 1;

                const actual = sum(0, 1);

                expect(actual).to.be.eq(expected);
            });            

            it('Expect sum(1) to be equal to 1', () => {
                const actual = sum(1);

                expect(actual).to.be.eq(1);
            });

            it('Expect sum() to be equal to 0', () => {
                const actual = sum();

                expect(actual).to.be.eq(0);
            });
        });

        describe('Invalid Tests', () => {    
            it('Expect sum("asd", 3) to be equal to NaN', () => {
                const actual = sum("asd", 3);

                expect(actual).to.be.NaN;
            });

            it('Expect sum(3, "asd") to be equal to NaN', () => {
                const actual = sum(3, "asd");

                expect(actual).to.be.NaN;
            });

            it('Expect sum(3, "4") to be equal to NaN', () => {
                const actual = sum(3, "4");

                expect(actual).to.be.NaN;
            });

            it('Expect sum({}, 3) to be equal to NaN', () => {
                const actual = sum({}, 3);

                expect(actual).to.be.NaN;
            });

            it('Expect sum(undefined, 3) to be equal to NaN', () => {
                const actual = sum(undefined, 3);

                expect(actual).to.be.NaN;
            });

            it('Expect sum(null, 3) to be equal to NaN', () => {
                const actual = sum(null, 3);

                expect(actual).to.be.NaN;
            });

            it('Expect sum(true, 3) to be equal to NaN', () => {
                const actual = sum(true, 3);

                expect(actual).to.be.NaN;
            });

            it('Expect sum(false, 3) to be equal to NaN', () => {
                const actual = sum(false, 3);

                expect(actual).to.be.NaN;
            });            
        });

        describe('Valid Array Tests', () => {
            it('Expect sum([1, 2, 3]) to be equal to 6', () => {
                const expected = 6;

                const actual = sum([1, 2, 3]);

                expect(actual).to.be.eq(expected);
            });

            it('Expect sum([], 3) to be equal to 0', () => {
                const actual = sum([], 3);

                expect(actual).to.be.eq(0);
            });

            it('Expect sum([4, 5, 6], 3) to be equal to 15', () => {
                const actual = sum([4, 5, 6], 3);

                expect(actual).to.be.eq(15);
            });
        });

        describe('Invalid Array Tests', () => {
            it('Expect sum(3, []) to be equal to NaN', () => {
                const actual = sum(3, []);

                expect(actual).to.be.NaN;
            });

            it('Expect sum([{}, 3]) to be equal to NaN', () => {
                const actual = sum([{}, 3]);

                expect(actual).to.be.NaN;
            });

            it('Expect sum([undefined, 3]) to be equal to NaN', () => {
                const actual = sum([undefined, 3]);

                expect(actual).to.be.NaN;
            });

            it('Expect sum([null, 3]) to be equal to NaN', () => {
                const actual = sum([null, 3]);

                expect(actual).to.be.NaN;
            });

            it('Expect sum([true, 3]) to be equal to NaN', () => {
                const actual = sum([true, 3]);

                expect(actual).to.be.NaN;
            });

            it('Expect sum([false, 3]) to be equal to NaN', () => {
                const actual = sum([false, 3]);

                expect(actual).to.be.NaN;
            });
        });
    });

    describe('subtract', () => { 

    });
});