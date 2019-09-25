const { HolidayPackage } = require('../HolidayPackage');
const { expect } = require('chai');

describe('02. HolidayPackage Tests', () => {
    describe('General tests', () =>{
        it('Expect HolidayPackage to be function', () => {
            expect(typeof HolidayPackage).to.be.equal('function');
        });

        it('Expect new HolidayPackage() to return object', () => {
            expect(typeof new HolidayPackage()).to.be.equal('object');
        });

        it('Expect new HolidayPackage() to return correct object', () => {
            const obj = new HolidayPackage('Spain', 'Summer');

            expect(Array.isArray(obj.vacationers)).to.be.equal(true, 'vacationers prop is not array');
            expect(obj.vacationers.length).to.be.equal(0, 'vacationers is not empty');

            expect(obj.destination).to.be.equal('Spain', 'wrong destination property');
            expect(obj.season).to.be.equal('Summer', 'wrong season property');
            expect(obj.insuranceIncluded).to.be.deep.equal(false, 'wrong default value');
        });
    });

    describe('Class tests', () => {
        let hp;

        beforeEach(() => {
            hp = new HolidayPackage('Italy', 'Summer'); 
        });

        describe('Function showVacationers Tests', () => {
            it('Function showVacationers error message with no vacationers', () => {
                expect(hp.showVacationers()).to.be.equal('No vacationers are added yet');
            });
    
            it('Function showVacationers to return vacationers', () => {
                hp.addVacationer('Adam Sandler');
                hp.addVacationer('Bil Gates');
                hp.addVacationer('Joe Smith');
    
                expect(hp.showVacationers()).to.be.equal('Vacationers:\nAdam Sandler\nBil Gates\nJoe Smith');
                expect(hp.vacationers.length).to.be.equal(3, 'wrong vacationers count');
            });
        });

        describe('Function vacationers Tests', () => {
            it('addVacationer with not string parameter', () => {
                expect(() => { hp.addVacationer({}) }).to.throw('Vacationer name must be a non-empty string');
                expect(() => { hp.addVacationer({k:'v'}) }).to.throw('Vacationer name must be a non-empty string');
                expect(() => { hp.addVacationer([]) }).to.throw('Vacationer name must be a non-empty string');
                expect(() => { hp.addVacationer([1, 2, 3]) }).to.throw('Vacationer name must be a non-empty string');
                expect(() => { hp.addVacationer(1) }).to.throw('Vacationer name must be a non-empty string');
                expect(() => { hp.addVacationer(1, 2) }).to.throw('Vacationer name must be a non-empty string');
                expect(() => { hp.addVacationer(() => {}) }).to.throw('Vacationer name must be a non-empty string');
                expect(() => { hp.addVacationer(undefined) }).to.throw('Vacationer name must be a non-empty string');
                expect(() => { hp.addVacationer(null) }).to.throw('Vacationer name must be a non-empty string');
                expect(() => { hp.addVacationer(true) }).to.throw('Vacationer name must be a non-empty string');
                expect(() => { hp.addVacationer(false) }).to.throw('Vacationer name must be a non-empty string');
            });

            it('addVacationer with string edge cases', () => {
                expect(() => { hp.addVacationer('') }).to.throw('Name must consist of first name and last name');
                expect(() => { hp.addVacationer(' ') }).to.throw('Vacationer name must be a non-empty string');
            });

            it('addVacationer with single name', () => {
                expect(() => { hp.addVacationer('Ivan') }).to.throw('Name must consist of first name and last name');
            });

            it('addVacationer with three names', () => {
                expect(() => { hp.addVacationer('Ivan Petrov Ivnov') }).to.throw('Name must consist of first name and last name');
            });

            it('addVacationer with two names - correct', () => {
                hp.addVacationer('Ivan Ivanov');

                expect(hp.vacationers.length).to.be.equal(1, 'Incorrect vacationers count');
                expect(JSON.stringify(hp.vacationers)).to.be.equal('["Ivan Ivanov"]', 'Incorrect vacationers');
            });

            it('addVacationer multiple correct names', () => {
                hp.addVacationer('Ivan Ivanov');
                hp.addVacationer('Pesho Peshev');
                hp.addVacationer('Mitko Gerchev');
                
                expect(hp.vacationers.length).to.be.equal(3, 'Incorrect vacationers count');
                expect(JSON.stringify(hp.vacationers)).to.be.equal('["Ivan Ivanov","Pesho Peshev","Mitko Gerchev"]', 'Incorrect vacationers');
            });
        });


        describe('Getter insuranceIncluded Tests', () => {
            it('Expect insuranceIncluded to return true', () => {
                hp._insuranceIncluded = true;

                expect(hp.insuranceIncluded).to.be.equal(true, 'Incorrect vacationers count');
            });

            it('Expect insuranceIncluded to return false', () => {
                hp._insuranceIncluded = false;

                expect(hp.insuranceIncluded).to.be.equal(false, 'Incorrect vacationers count');
            });
        });
        
        describe('Setter insuranceIncluded Tests', () => {
            it('Setter insuranceIncluded with not boolean should throw error', () => {
                expect(() => { hp.insuranceIncluded = 'Ivan' }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = 34 }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = null }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = undefined }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = () => {} }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = {} }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = [] }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = { k: 'v' } }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = [1, 2, 3] }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = -34 }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = 'true' }).to.throw('Insurance status must be a boolean');
                expect(() => { hp.insuranceIncluded = 'false' }).to.throw('Insurance status must be a boolean');
            });

            it('Setter insuranceIncluded with true should work fine', () => {
                hp.insuranceIncluded = true;

                expect(hp._insuranceIncluded).to.be.equal(true, 'Setter not working correctly');
            });

            it('Setter insuranceIncluded with false should work fine', () => {
                hp.insuranceIncluded = false;

                expect(hp._insuranceIncluded).to.be.equal(false, 'Setter not working correctly');
            });
        });

        describe('Function generateHolidayPackage Tests', () => {
            it('Expect Function generateHolidayPackage to throw error with empty vacationers', () => {
                expect(() => { hp.generateHolidayPackage() }).to.throw('There must be at least 1 vacationer added');
            });

            it('Summer package with one vacationer', () => {
                hp.addVacationer('Ivan Ivanov');
                expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 600');
            });

            it('Summer package with more than one vacationer', () => {
                hp.addVacationer('Ivan Ivanov');
                hp.addVacationer('Peter Krumov');
                hp.addVacationer('Zoran Zaev');
                expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPeter Krumov\nZoran Zaev\nPrice: 1400');
            });

            it('Winter package with one vacationer', () => {
                hp = new HolidayPackage('Italy', 'Winter'); 
                hp.addVacationer('Ivan Ivanov');
                expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 600');
            });

            it('Winter package with one vacationer', () => {
                hp = new HolidayPackage('Italy', 'Winter'); 
                hp.addVacationer('Ivan Ivanov');
                hp.addVacationer('Peter Krumov');
                hp.addVacationer('Zoran Zaev');
                expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPeter Krumov\nZoran Zaev\nPrice: 1400');
            });

            it('Spring package with one vacationer', () => {
                hp = new HolidayPackage('Italy', 'Spring'); 
                hp.addVacationer('Ivan Ivanov');
                expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 400');
            });

            it('Spring package with one vacationer', () => {
                hp = new HolidayPackage('Italy', 'Spring'); 
                hp.addVacationer('Ivan Ivanov');
                hp.addVacationer('Peter Krumov');
                hp.addVacationer('Zoran Zaev');
                expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPeter Krumov\nZoran Zaev\nPrice: 1200');
            });

            it('Autumn package with one vacationer', () => {
                hp = new HolidayPackage('Italy', 'Autumn'); 
                hp.addVacationer('Ivan Ivanov');
                expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 400');
            });

            it('Autumn package with one vacationer', () => {
                hp = new HolidayPackage('Italy', 'Autumn'); 
                hp.addVacationer('Ivan Ivanov');
                hp.addVacationer('Peter Krumov');
                hp.addVacationer('Zoran Zaev');
                expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPeter Krumov\nZoran Zaev\nPrice: 1200');
            });

            it('Summer package with one vacationer and insurance', () => {
                hp = new HolidayPackage('Italy', 'Summer'); 
                hp.addVacationer('Ivan Ivanov');
                hp.insuranceIncluded = true;
                expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 700');
            });

            it('Summer package with one vacationer without insurance', () => {
                hp = new HolidayPackage('Italy', 'Summer'); 
                hp.addVacationer('Ivan Ivanov');
                hp.insuranceIncluded = false;
                expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 600');
            });
        })
    });
});