const { Calculator } = require('../Calculator');
const { expect } = require('chai');

describe('02. Calculator Tests', () => {
    describe('General Tests', () => {
        it('Expect Calculator to be function', () => {
            expect(typeof Calculator).to.be.equal('function');
        });

        it('Expect new Calculator() to return object', () => {
            expect(typeof new Calculator()).to.be.equal('object');
        });

        it('Expect new Calculator() object to be correct', () => {
            const obj = new Calculator()
            expect(Array.isArray(obj.expenses)).to.be.equal(true, 'expenses are not Array');
            expect(obj.expenses.length).to.be.equal(0, 'expenses are not empty')
        });
    });

    describe('Function add(data) Tests', () => {
        let calculator;

        beforeEach(() => {
            calculator = new Calculator();
        })

        it('Add primitive types', () => {
            calculator.add(5);
            calculator.add('text');
            calculator.add(1.5);
            calculator.add(true);

            expect(calculator.expenses).deep.equal([5, 'text', 1.5, true])
        });

        it('Add reference types', () => {
            const fn = () => true;

            calculator.add({ key: 'value' });
            calculator.add([1]);
            calculator.add(fn);

            expect(calculator.expenses).deep.equal([{ key: 'value' }, [1], fn])
        });
    });

    describe('Function divideNums() Tests', () => {
        let calculator;

        beforeEach(() => {
            calculator = new Calculator();
        })

        it('There are only numbers in expense', () => {
            calculator.add(100);
            calculator.add(2);

            expect(calculator.divideNums()).to.be.equal(50);
        });

        it('There are only numbers in expense(2)', () => {
            calculator.add(100);
            calculator.add(2);
            calculator.add(5);

            expect(calculator.divideNums()).to.be.equal(10);
        });

        it('Floating point result from division', () => {
            calculator.add(10);
            calculator.add(3);

            expect(calculator.divideNums()).to.be.closeTo(3.33, 0.01);
        });

        it('Floating point division', () => {
            calculator.add(10.5);
            calculator.add(2);

            expect(calculator.divideNums()).to.be.closeTo(5.25, 0.01);
        });

        it('Division by zero', () => {
            calculator.add(10);
            calculator.add(0);

            expect(calculator.divideNums()).to.be.equal('Cannot divide by zero');
        });

        it('No input', () => {
            expect(() => { calculator.divideNums() }).to.throw('There are no numbers in the array!');
        });

        it('No nums', () => {
            calculator.add({k: 'v'});
            calculator.add([2]);
            calculator.add([5, 6]);
            calculator.add([]);
            calculator.add('gosho');
            calculator.add('6');

            expect(() => { calculator.divideNums() }).to.throw('There are no numbers in the array!');
        });
    });

    describe('Function toString() Tests', () => {
        let calculator;

        beforeEach(() => {
            calculator = new Calculator();
        })

        it('Standard test', () => {
            calculator.add(10);
            calculator.add('Pesho');
            calculator.add(5);

            expect(calculator.toString()).to.be.equal('10 -> Pesho -> 5');
        });

        it('Empty arr test', () => {
 
            expect(calculator.toString()).to.be.equal('empty array');
        });

        it('One element test', () => {
            calculator.add(1); 
            expect(calculator.toString()).to.be.deep.equal('1');
        });
    });

    describe('Function orderBy Tests', () => {
        let calculator;

        beforeEach(() => {
            calculator = new Calculator();
        });

        it('Sort numbers', () => {
            calculator.add(10);
            calculator.add(-3);
            calculator.add(30);
            calculator.add(1);

            expect(calculator.orderBy()).to.be.equal('-3, 1, 10, 30');
        });

        it('Sort strings', () => {
            calculator.add('asd');
            calculator.add('zzz');
            calculator.add('fff');
            calculator.add('abv');
            calculator.add('ZZZ');
            calculator.add('CCC');
            calculator.add('AAA');
            calculator.add('BBB');

            expect(calculator.orderBy()).to.be.equal('AAA, BBB, CCC, ZZZ, abv, asd, fff, zzz');
        });

        it('Mixed Data', () => {
            calculator.add({});
            calculator.add([3, 2, 1]);
            calculator.add('pesho');

            expect(calculator.orderBy()).to.be.equal('3,2,1, [object Object], pesho');
        });

        it('Mixed Data(2)', () => {
            calculator.add(100);
            calculator.add({});
            calculator.add([1, 2, 3]);
            calculator.add('pesho');
            calculator.add(-100);

            expect(calculator.orderBy()).to.be.equal('-100, 1,2,3, 100, [object Object], pesho');
        });
    });
});