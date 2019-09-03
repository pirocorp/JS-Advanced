const isSymmetric = require('../05. Check for Symmetry');
const { expect } = require('chai');

describe('05. Check for Symmetry Tests', () => {
    describe('General Tests', () => {
        it('Expect isSymmetric to be function', () => {
            expect(typeof isSymmetric).to.be.equal('function')
        });
    });

    describe('Input Tests', () => {
        it('Expect isSymmetric([1, 2, 1], 9, 6) to be true', () => {
            expect(isSymmetric([1, 2, 1], 9, 6)).to.be.equal(true);
        });

        it('Expect isSymmetric(1, 2, 1) to be false', () => {
            expect(isSymmetric(1, 2, 1)).to.be.equal(false);
        });        

        it('Expect isSymmetric([1, 2, 3], 9, 6) to be false', () => {
            expect(isSymmetric([1, 2, 3], 9, 6)).to.be.equal(false);
        });
    });

    describe('Is Symetric Tests', () => {
        it('Expect isSymmetric([]) to be true', () => {
            expect(isSymmetric([])).to.be.equal(true);
        });

        it('Expect isSymmetric([2]) to be true', () => {
            expect(isSymmetric([2])).to.be.equal(true);
        });

        it('Expect isSymmetric([5, 5]) to be true', () => {
            expect(isSymmetric([5, 5])).to.be.equal(true);
        });

        it('Expect isSymmetric([1, 2, 1]) to be true', () => {
            expect(isSymmetric([1, 2, 1])).to.be.equal(true);
        });

        it('Expect isSymmetric([1, 2, 2, 1]) to be true', () => {
            expect(isSymmetric([1, 2, 2, 1])).to.be.equal(true);
        });

        it('Expect isSymmetric([{}, 2, {}]) to be true', () => {
            expect(isSymmetric([{}, 2, {}])).to.be.equal(true);
        });

        it('Expect isSymmetric([{}, 2, {}]) to be true', () => {
            expect(isSymmetric([{name: 'Pesho'}, 2, {name: 'Pesho'}])).to.be.equal(true);
        });        

        it('Expect isSymmetric(["asd", 2, "asd"]) to be true', () => {
            expect(isSymmetric(['asd', 2, 'asd'])).to.be.equal(true);
        });

        it('Expect isSymmetric([undefined, 2, "undefined]) to be true', () => {
            expect(isSymmetric([undefined, 2, undefined])).to.be.equal(true);
        });

        it('Expect isSymmetric([NaN, 2, NaN]) to be true', () => {
            expect(isSymmetric([NaN, 2, NaN])).to.be.equal(true);
        });

        it('Expect isSymmetric([true, 2, true]) to be true', () => {
            expect(isSymmetric([true, 2, true])).to.be.equal(true);
        });

        it('Expect isSymmetric([false, 2, false]) to be true', () => {
            expect(isSymmetric([false, 2, false])).to.be.equal(true);
        });
    });

    describe('Not Symetric Tests', () => {
        it('Expect isSymmetric([4, 5]) to be false', () => {
            expect(isSymmetric([4, 5])).to.be.equal(false);
        });

        it('Expect isSymmetric([1, 2, 3]) to be false', () => {
            expect(isSymmetric([1, 2, 3])).to.be.equal(false);
        });

        it('Expect isSymmetric([1, 2, 4, 1]) to be false', () => {
            expect(isSymmetric([1, 2, 4, 1])).to.be.equal(false);
        });

        it('Expect isSymmetric([{ name: "Pesho" }, 2, { name: "Gosho" }]) to be false', () => {
            expect(isSymmetric([{ name: 'Pesho' }, 2, { name: 'Gosho' }])).to.be.equal(false);
        });

        it('Expect isSymmetric([true, 2, 1]) to be false', () => {
            expect(isSymmetric([true, 2, 1])).to.be.equal(false);
        });

        it('Expect isSymmetric([false, 2, 0]) to be false', () => {
            expect(isSymmetric([false, 2, 0])).to.be.equal(false);
        });
    });
});