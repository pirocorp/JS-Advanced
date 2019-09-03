const createCalculator = require('../07. Add-Subtract');
const { expect } = require('chai');

describe('07. Add-Subtract Tests', () => {
    describe('General Tests', () => {
        it('Expect createCalculator to be function', () => {
            expect(typeof createCalculator).to.be.equal('function')
        });

        it('Expect createCalculator to return object', () => {
            expect(typeof createCalculator()).to.be.equal('object')
        });

        it('Expect createCalculator().add to return function', () => {
            expect(typeof createCalculator().add).to.be.equal('function')
        });

        it('Expect createCalculator().subtract to return function', () => {
            expect(typeof createCalculator().subtract).to.be.equal('function')
        });

        it('Expect createCalculator().get to return function', () => {
            expect(typeof createCalculator().get).to.be.equal('function')
        });

        it('Expect createCalculator default value to be 0', () => {
            expect(createCalculator().get()).to.be.equal(0);
        });
    });

    describe('Functional Tests', () => {
        let calculator;

        beforeEach(() => {
            calculator = createCalculator();
        });

        describe('add', () => {
            describe('Valid Tests', () => {
                it('After calculator.add(5) expect value to be 5', () => {
                    calculator.add(5);

                    expect(calculator.get()).to.be.equal(5);
                });      
                
                it('After calculator.add(-3) expect value to be -3', () => {
                    calculator.add(-3);

                    expect(calculator.get()).to.be.equal(-3);
                }); 
                
                it('After calculator.add(-3) calculator.add(5) expect value to be 2', () => {
                    calculator.add(-3);
                    calculator.add(5);

                    expect(calculator.get()).to.be.equal(2);
                }); 


                it('After calculator.add("5") expect value to be 5', () => {
                    calculator.add('5');

                    expect(calculator.get()).to.be.equal(5);
                });

                it('After calculator.add("-3") expect value to be -3', () => {
                    calculator.add('-3');

                    expect(calculator.get()).to.be.equal(-3);
                });

                it('After calculator.add("-3") calculator.add("5") expect value to be 2', () => {
                    calculator.add('-3');
                    calculator.add('5');

                    expect(calculator.get()).to.be.equal(2);
                });  
                
                it('After calculator.add([]) expect value to be equal to 0', () => {
                    calculator.add([]);

                    expect(calculator.get()).to.be.equal(0);
                });

                it('After calculator.add([5]) expect value to be equal 5', () => {
                    calculator.add([5]);

                    expect(calculator.get()).to.be.equal(5);
                });
                
                it('After calculator.add(true) expect value to be 1', () => {
                    calculator.add(true);

                    expect(calculator.get()).to.be.equal(1);
                });

                it('After calculator.add(false) expect value to be 0', () => {
                    calculator.add(false);

                    expect(calculator.get()).to.be.equal(0);
                });

                it('After calculator.add(null) expect value not to change', () => {
                    calculator.add(5);
                    const valuBeforeNull = calculator.get();
                    calculator.add(null);
                    const valuAfterNull = calculator.get();

                    expect(valuBeforeNull).to.be.equal(valuAfterNull);
                }); 
            });

            describe('Invalid Tests', () => {
                it('After calculator.add() expect value to be NaN', () => {
                    calculator.add();

                    expect(calculator.get()).to.be.NaN;
                });

                it('After calculator.add("asd") expect value to be NaN', () => {
                    calculator.add('asd');

                    expect(calculator.get()).to.be.NaN;
                });

                it('After calculator.add([1, 6]) expect value to be NaN', () => {
                    calculator.add([1, 6]);

                    expect(calculator.get()).to.be.NaN;
                });

                it('After calculator.add({}) expect value to be NaN', () => {
                    calculator.add({});

                    expect(calculator.get()).to.be.NaN;
                });

                it('After calculator.add(undefined) expect value to be NaN', () => {
                    calculator.add(undefined);

                    expect(calculator.get()).to.be.NaN;
                });  
            });
        });

        describe('subtract', () => {
            describe('Valid Tests', () => {
                it('After calculator.subtract(5) expect value to be -5', () => {
                    calculator.subtract(5);

                    expect(calculator.get()).to.be.equal(-5);
                });

                it('After calculator.subtract(-3) expect value to be 3', () => {
                    calculator.subtract(-3);

                    expect(calculator.get()).to.be.equal(3);
                });

                it('After calculator.subtract(-3) calculator.subtract(5) expect value to be -2', () => {
                    calculator.subtract(-3);
                    calculator.subtract(5);

                    expect(calculator.get()).to.be.equal(-2);
                });

                it('After calculator.add("5") expect value to be -5', () => {
                    calculator.subtract('5');

                    expect(calculator.get()).to.be.equal(-5);
                });

                it('After calculator.subtract("-3") expect value to be 3', () => {
                    calculator.subtract('-3');

                    expect(calculator.get()).to.be.equal(3);
                });

                it('After calculator.subtract("-3") calculator.subtract("5") expect value to be -2', () => {
                    calculator.subtract('-3');
                    calculator.subtract('5');

                    expect(calculator.get()).to.be.equal(-2);
                });

                it('After calculator.subtract([]) expect value to be equal to 0', () => {
                    calculator.subtract([]);

                    expect(calculator.get()).to.be.equal(0);
                });

                it('After calculator.subtract([5]) expect value to be equal -5', () => {
                    calculator.subtract([5]);

                    expect(calculator.get()).to.be.equal(-5);
                });

                it('After calculator.subtract(true) expect value to be -1', () => {
                    calculator.subtract(true);

                    expect(calculator.get()).to.be.equal(-1);
                });

                it('After calculator.subtract(false) expect value to be 0', () => {
                    calculator.subtract(false);

                    expect(calculator.get()).to.be.equal(0);
                });

                it('After calculator.subtract(null) expect value not to change', () => {
                    calculator.subtract(5);
                    const valuBeforeNull = calculator.get();
                    calculator.subtract(null);
                    const valuAfterNull = calculator.get();

                    expect(valuBeforeNull).to.be.equal(valuAfterNull);
                }); 
            });

            describe('Invalid Tests', () => {
                it('After calculator.subtract() expect value to be NaN', () => {
                    calculator.subtract();

                    expect(calculator.get()).to.be.NaN;
                });

                it('After calculator.subtract("asd") expect value to be NaN', () => {
                    calculator.subtract('asd');

                    expect(calculator.get()).to.be.NaN;
                });

                it('After calculator.subtract([1, 6]) expect value to be NaN', () => {
                    calculator.subtract([1, 6]);

                    expect(calculator.get()).to.be.NaN;
                });

                it('After calculator.subtract({}) expect value to be NaN', () => {
                    calculator.subtract({});

                    expect(calculator.get()).to.be.NaN;
                });

                it('After calculator.subtract(undefined) expect value to be NaN', () => {
                    calculator.subtract(undefined);

                    expect(calculator.get()).to.be.NaN;
                });  
            });
        });
    });    
});