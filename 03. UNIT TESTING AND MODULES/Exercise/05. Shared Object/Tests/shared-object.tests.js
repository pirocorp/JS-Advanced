const { expect } = require('chai');

//testHTML
const { originalHTML } = require('./shared-object.html');

//Get JSDOM
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Also set global window and document before requiring jQuery
global.window = new JSDOM(originalHTML).window;
global.document = window.document;

//Original Body
const originalBodyHTML = document.body.innerHTML;

//JQUERY
const $ = global.jQuery = require('jquery');

//Object to be tested
const { sharedObject } = require('../shared-object');

describe('05. Shared Object Tests', () => {
    describe('General Frameworks Tests', () => {
        it('Test JSDOM', () => {
            const divElement = document.querySelector('#wrapper');
            expect(divElement).to.exist;
        });

        it('Tests JQUERY', () => {
            const pElement = $('#wrapper');
            expect(pElement).to.exist;
        });
    });

    describe('Environment Tests', () => {
        it('Reset window and document before each test TEST', () => {
            //Check if HTML is Updated
            const nameElement = document.querySelector('#name');
            nameElement.value = 'New name';
            expect(document.querySelector('#name').value).to.be.equal('New name', 'Old HTML was not modified');

            //Reset document
            document.body.innerHTML = originalBodyHTML;

            //Check if HTML is returned to Original
            expect(document.querySelector('#name').value).to.be.equal('', 'HTML was not reseted');
        });
    });

    describe('General Tests', () => {
        it('Expect sharedObject to be object', () => {
            expect(typeof sharedObject).to.be.equal('object');
        });

        it('Expect sharedObject.changeName to be function', () => {
            expect(typeof sharedObject.changeName).to.be.equal('function');
        });

        it('Expect sharedObject.changeIncome to be function', () => {
            expect(typeof sharedObject.changeIncome).to.be.equal('function');
        });

        it('Expect sharedObject.updateName to be function', () => {
            expect(typeof sharedObject.updateName).to.be.equal('function');
        });

        it('Expect sharedObject.updateIncome to be function', () => {
            expect(typeof sharedObject.updateIncome).to.be.equal('function');
        });

        describe('Intial State Tests', () => {
            it('Expect default value for name to be null', () => {
                expect(sharedObject.name).to.be.null;
            });

            it('Expect default value for income to be null', () => {
                expect(sharedObject.income).to.be.null;
            });
        });
    });

    describe('Functional Tests', () => {
        beforeEach("Init the HTML", () => {
            //Reset document before each test
            document.body.innerHTML = originalBodyHTML;
        });

        describe('changeName Tests', () => {
            beforeEach("Init the HTML", () => {
                //Reset document before each test
                document.body.innerHTML = originalBodyHTML;
            });

            it('Expect changeName("") to make no changes', () => {
                const originalName = sharedObject.name;
                sharedObject.changeName('');
                expect(sharedObject.name).to.be.equal(originalName, 'Name property was changed');
                expect(document.body.innerHTML).to.be.equal(originalBodyHTML, 'Name input field was changed');
            });

            it('Expect changeName("New Name") to make changes', () => {
                sharedObject.changeName('New Name');
                expect(sharedObject.name).to.be.equal('New Name', 'Name property was not set');
                expect(document.querySelector('#name').value).to.be.equal('New Name', 'Name input field was not set');
            });
        });

        describe('changeIncome Tests', () => {
            beforeEach("Init the HTML", () => {
                //Reset document before each test
                document.body.innerHTML = originalBodyHTML;
            });

            it('Expect changeIncome(-5) to make no changes', () => {
                const originalIncome = sharedObject.income;
                sharedObject.changeIncome(-5);
                expect(sharedObject.income).to.be.equal(originalIncome, 'Property was changed');
                expect(document.body.innerHTML).to.be.equal(originalBodyHTML, 'Input field was changed');
            });

            it('Expect changeIncome(0) to make no changes', () => {
                const originalIncome = sharedObject.income;
                sharedObject.changeIncome(0);
                expect(sharedObject.income).to.be.equal(originalIncome, 'Property was changed');
                expect(document.body.innerHTML).to.be.equal(originalBodyHTML, 'Input field was changed');
            });

            it('Expect changeIncome(3.14) to make no changes', () => {
                const originalIncome = sharedObject.income;
                sharedObject.changeIncome(3.14);
                expect(sharedObject.income).to.be.equal(originalIncome, 'Property was changed');
                expect(document.body.innerHTML).to.be.equal(originalBodyHTML, 'Input field was changed');
            });

            it('Expect changeIncome("3" to make no changes', () => {
                const originalIncome = sharedObject.income;
                sharedObject.changeIncome("3");
                expect(sharedObject.income).to.be.equal(originalIncome, 'Property was changed');
                expect(document.body.innerHTML).to.be.equal(originalBodyHTML, 'Input field was changed');
            });

            it('Expect changeIncome(3) to be equal to 3', () => {
                sharedObject.changeIncome(3);
                expect(sharedObject.income).to.be.equal(3, 'Income property was not set');
                expect(document.querySelector('#income').value).to.be.equal('3', 'Income input field was not set');
            });
        });

        describe('updateName Tests', () => {
            beforeEach("Init the HTML", () => {
                //Reset document before each test
                document.body.innerHTML = originalBodyHTML;
            });

            it('Expect updateName() with no text value in name input field to make no changes', () => {

                sharedObject.name = 'Test Name';
                const originalName = sharedObject.name;
                document.querySelector('#name').value = '';

                sharedObject.updateName();

                expect(sharedObject.name).to.be.equal(originalName, 'Name property was incorectly changes');
            });

            it('Expect updateName() with text value "New Name" in name input field to make changes', () => {
                sharedObject.name = 'Test Name';
                document.querySelector('#name').value = 'New Name';

                sharedObject.updateName();

                expect(sharedObject.name).to.be.equal('New Name', 'Name property was not changed');
            });
        });

        describe('updateIncome Tests', () => {
            beforeEach("Init the HTML", () => {
                //Reset document before each test
                document.body.innerHTML = originalBodyHTML;
            });

            it('Expect updateIncome() with no text value in income input field to make no changes', () => {
                sharedObject.income = 10;
                const originalIncome = sharedObject.income;
                document.querySelector('#income').value = '';
                
                sharedObject.updateIncome();

                expect(sharedObject.income).to.be.equal(originalIncome, 'Income property was incorectly changes');
            });

            it('Expect updateIncome() with "-5" value in income input field to make no changes', () => {
                sharedObject.income = 10;
                const originalIncome = sharedObject.income;
                document.querySelector('#income').value = '-5';

                sharedObject.updateIncome();

                expect(sharedObject.income).to.be.equal(originalIncome, 'Income property was incorectly changes');
            });

            it('Expect updateIncome() with "0" value in income input field to make no changes', () => {
                sharedObject.income = 10;
                const originalIncome = sharedObject.income;
                document.querySelector('#income').value = '0';

                sharedObject.updateIncome();

                expect(sharedObject.income).to.be.equal(originalIncome, 'Income property was incorectly changes');
            });

            it('Expect updateIncome() with "3.14" value in income input field to make no changes', () => {
                sharedObject.income = 10;
                const originalIncome = sharedObject.income;
                document.querySelector('#income').value = '3.14';

                sharedObject.updateIncome();

                expect(sharedObject.income).to.be.equal(originalIncome, 'Income property was incorectly changes');
            });

            it('Expect updateIncome() with "3,14" value in income input field to make no changes', () => {
                sharedObject.income = 10;
                const originalIncome = sharedObject.income;
                document.querySelector('#income').value = '3,14';

                sharedObject.updateIncome();

                expect(sharedObject.income).to.be.equal(originalIncome, 'Income property was incorectly changes');
            });

            it('Expect updateIncome() with "3px" value in income input field to make no changes', () => {
                sharedObject.income = 10;
                const originalIncome = sharedObject.income;
                document.querySelector('#income').value = '3px';

                sharedObject.updateIncome();

                expect(sharedObject.income).to.be.equal(originalIncome, 'Income property was incorectly changes');
            });

            it('Expect updateIncome() with "3" value in income input field to be equal to 3', () => {
                sharedObject.income = 10;
                document.querySelector('#income').value = '3';

                sharedObject.updateIncome();

                expect(sharedObject.income).to.be.equal(3, 'Income property was not set');
            });
        });
    });
});