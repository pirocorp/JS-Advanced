const { expect } = require('chai');

//testHTML
const { originalHTML } = require('./armagedon.html');

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

//Function to be tested
const { nuke } = require('../armagedom');

describe('06. ArmageDOM Tests', () => {
    describe('General Tests', () => {
        it('Expect nuke to be function', () => {
            expect(typeof nuke).to.be.equal('function');
        });
    });

    describe('General Frameworks Tests', () => {
        it('Test JSDOM', () => {
            const pElement = document.querySelector('#target div.nested.target p');
            expect(pElement.textContent).to.be.equal('This is some text', 'JSDOM not working properly')
        });

        it('Tests JQUERY', () => {
            const pElement = $('#target div.nested.target p').html();
            expect(pElement).to.be.equal(`This is some text`, 'JQUERY not working properly');
        });
    });

    describe('Environment Tests', () => {
        it('Reset window and document before each test TEST', () => {
            //Check if HTML is Updated
            const pElement = document.querySelector('#target div.nested.target p');
            pElement.textContent = 'New text text';
            expect(document.querySelector('#target div.nested.target p').textContent).to.be.equal('New text text', 'Old HTML was not modified');

            //Reset window and document before each test
            document.body.innerHTML = originalBodyHTML;

            //Check if HTML is returned to Original
            expect(document.querySelector('#target div.nested.target p').textContent).to.be.equal('This is some text', 'HTML was not reseted');
        });
    });

    describe('Functional Tests', () => {        
        beforeEach("Init the HTML", () => {
            //Reset document before each test
            document.body.innerHTML = originalBodyHTML;
        });

        it('Should not remove element with first invalid Selector', () => {
            nuke(5, '#target');
            expect(document.body.innerHTML).to.be.equal(originalBodyHTML);
        });

        it('Should not remove element with second invalid Selector', () => {
            nuke(5, '#target');
            expect(document.body.innerHTML).to.be.equal(originalBodyHTML);
        });

        it('Should not remove element with one valid Selector', () => {
            nuke('#target');
            expect(document.body.innerHTML).to.be.equal(originalBodyHTML);
        });

        it('Should not remove element with no Selectors', () => {
            nuke();
            expect(document.body.innerHTML).to.be.equal(originalBodyHTML);
        });

        it('Should not remove element with both equal selectors', () => {
            nuke('#target', '#target');
            expect(document.body.innerHTML).to.be.equal(originalBodyHTML);
        });

        it('Should not remove element with both valid selectors', () => {
            nuke('.inside', '.nested');
            expect(document.body.innerHTML).to.be.equal(originalBodyHTML);
        });

        it('Should remove element with proper selectors', () => {
            nuke('.nested', '.target');
            expect(document.body.innerHTML).not.be.equal(originalBodyHTML);
        });
    });
});