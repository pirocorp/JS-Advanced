const { expect } = require('chai');
const { mathEnforcer } = require('../04. Math Enforcer');

describe('04. Math Enforcer Tests', () => {
    describe('General Tests', () => {
        it('Expect mathEnforcer to be object', () => {
            expect(typeof mathEnforcer).to.be.equal('object');
        });

        it('Expect mathEnforcer.addFive to be function', () => {
            expect(typeof mathEnforcer.addFive).to.be.equal('function');
        });

        it('Expect mathEnforcer.subtractTen to be function', () => {
            expect(typeof mathEnforcer.subtractTen).to.be.equal('function');
        });

        it('Expect mathEnforcer.sum to be function', () => {
            expect(typeof mathEnforcer.sum).to.be.equal('function');
        });
    });

    describe('addFive Tests', () => {
        describe('Valid tests', () => {
            it('Expect mathEnforcer.addFive(10) to be equal to 15', () => {
                expect(mathEnforcer.addFive(10)).to.be.equal(15);
            });

            it('Expect mathEnforcer.addFive(0) to be equal to 5', () => {
                expect(mathEnforcer.addFive(0)).to.be.equal(5);
            });

            it('Expect mathEnforcer.addFive(-5) to be equal to 0', () => {
                expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            });

            it('Expect mathEnforcer.addFive(-6) to be equal to -1', () => {
                expect(mathEnforcer.addFive(-6)).to.be.equal(-1);
            });

            it('Expect mathEnforcer.addFive(3.14) to be close to to 8.14', () => {
                expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
            });

            it('Expect mathEnforcer.addFive(-3.14) to be close to to 1.86', () => {
                expect(mathEnforcer.addFive(-3.14)).to.be.closeTo(1.86, 0.01);
            });
        });

        describe('Invalid Input Parameter tests', () => {
            it('Number As String => undefined', () => {
                expect(mathEnforcer.addFive('5')).to.be.undefined;
            });

            it('String => undefined', () => {
                expect(mathEnforcer.addFive('asd')).to.be.undefined;
            });

            it('Array => undefined', () => {
                expect(mathEnforcer.addFive([])).to.be.undefined;
            });

            it('Object => undefined', () => {
                expect(mathEnforcer.addFive({})).to.be.undefined;
            });

            it('undefined => undefined', () => {
                expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            });

            it('null => undefined', () => {
                expect(mathEnforcer.addFive(null)).to.be.undefined;
            });

            it('true => undefined', () => {
                expect(mathEnforcer.addFive(true)).to.be.undefined;
            });

            it('false => undefined', () => {
                expect(mathEnforcer.addFive(false)).to.be.undefined;
            });
        });
    });

    describe('subtractTen Tests', () => {
        describe('Valid tests', () => {
            it('Expect mathEnforcer.subtractTen(15) to be equal to 5', () => {
                expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
            });

            it('Expect mathEnforcer.subtractTen(0) to be equal to -10', () => {
                expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
            });

            it('Expect mathEnforcer.subtractTen(20) to be equal to 10', () => {
                expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
            });

            it('Expect mathEnforcer.subtractTen(5) to be equal to -5', () => {
                expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
            });

            it('Expect mathEnforcer.subtractTen(-5) to be equal to -15', () => {
                expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
            });

            it('Expect mathEnforcer.subtractTen(3.14) to be close to to -6.86', () => {
                expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
            });

            it('Expect mathEnforcer.subtractTen(13.14) to be close to to 3.14', () => {
                expect(mathEnforcer.subtractTen(13.14)).to.be.closeTo(3.14, 0.01);
            });
        });

        describe('Invalid Input Parameter tests', () => {
            it('Number As String => undefined', () => {
                expect(mathEnforcer.subtractTen('5')).to.be.undefined;
            });

            it('String => undefined', () => {
                expect(mathEnforcer.subtractTen('asd')).to.be.undefined;
            });

            it('Array => undefined', () => {
                expect(mathEnforcer.subtractTen([])).to.be.undefined;
            });

            it('Object => undefined', () => {
                expect(mathEnforcer.subtractTen({})).to.be.undefined;
            });

            it('undefined => undefined', () => {
                expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            });

            it('null => undefined', () => {
                expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            });

            it('true => undefined', () => {
                expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            });

            it('false => undefined', () => {
                expect(mathEnforcer.subtractTen(false)).to.be.undefined;
            });
        });
    });

    describe('sum Tests', () => {
        describe('Valid Tests', () => {
            it('Expect mathEnforcer.sum(6, 5) to be equal to 11', () => {
                expect(mathEnforcer.sum(6, 5)).to.be.equal(11);
            });

            it('Expect mathEnforcer.sum(-6, 5) to be equal to -1', () => {
                expect(mathEnforcer.sum(-6, 5)).to.be.equal(-1);
            });

            it('Expect mathEnforcer.sum(6, -5) to be equal to 1', () => {
                expect(mathEnforcer.sum(6, -5)).to.be.equal(1);
            });

            it('Expect mathEnforcer.sum(-6, -5) to be equal to -11', () => {
                expect(mathEnforcer.sum(-6, -5)).to.be.equal(-11);
            });

            it('Expect mathEnforcer.sum(-6.5, -5.5) to be equal to -12', () => {
                expect(mathEnforcer.sum(-6.5, -5.5)).to.be.closeTo(-12, 0.01);
            });
        });

        describe('Invalid Input Parameters tests', () => {
            it('First Parameter: Number As String => undefined', () => {
                expect(mathEnforcer.sum('5', 5)).to.be.undefined;
            });

            it('Second Parameter: Number As String => undefined', () => {
                expect(mathEnforcer.sum(5, '5')).to.be.undefined;
            });

            it('First Parameter: String => undefined', () => {
                expect(mathEnforcer.sum('asd', 5)).to.be.undefined;
            });

            it('Second Parameter: String => undefined', () => {
                expect(mathEnforcer.sum(5, 'asd')).to.be.undefined;
            });

            it('First Parameter: Array => undefined', () => {
                expect(mathEnforcer.sum([], 5)).to.be.undefined;
            });

            it('Second Parameter: Array => undefined', () => {
                expect(mathEnforcer.sum(5, [])).to.be.undefined;
            });

            it('First Parameter: Object => undefined', () => {
                expect(mathEnforcer.sum({}, 5)).to.be.undefined;
            });

            it('Second Parameter: Object => undefined', () => {
                expect(mathEnforcer.sum(5, {})).to.be.undefined;
            });

            it('First Parameter: undefined => undefined', () => {
                expect(mathEnforcer.sum(undefined, 5)).to.be.undefined;
            });

            it('Second Parameter: undefined => undefined', () => {
                expect(mathEnforcer.sum(5, undefined)).to.be.undefined;
            });

            it('First Parameter: null => undefined', () => {
                expect(mathEnforcer.sum(null, 5)).to.be.undefined;
            });

            it('Second Parameter: null => undefined', () => {
                expect(mathEnforcer.sum(5, null)).to.be.undefined;
            });

            it('First Parameter: true => undefined', () => {
                expect(mathEnforcer.sum(true, 5)).to.be.undefined;
            });

            it('Second Parameter: true => undefined', () => {
                expect(mathEnforcer.sum(5, true)).to.be.undefined;
            });

            it('First Parameter: false => undefined', () => {
                expect(mathEnforcer.sum(false, 5)).to.be.undefined;
            });

            it('Second Parameter: false => undefined', () => {
                expect(mathEnforcer.sum(5, false)).to.be.undefined;
            });
        });
    });
});
