const rgbToHexColor = require('../06. RGB to Hex');
const { expect } = require('chai');

describe('06. RGB to Hex Tests', () => {
    describe('General Tests', () => {
        it('Expect rgbToHexColor to be function', () => {
            expect(typeof rgbToHexColor).to.be.equal('function')
        });
    });

    describe('Wrong Input Type Tests', () => {
        it('Expect rgbToHexColor([2, 3, 4]) to be undefined', () => {
            expect(rgbToHexColor([2, 3, 4])).to.be.undefined;
        });

        it('Expect rgbToHexColor() to be undefined', () => {
            expect(rgbToHexColor()).to.be.undefined;
        });

        it('Expect rgbToHexColor(2) to be undefined', () => {
            expect(rgbToHexColor(2)).to.be.undefined;
        });

        it('Expect rgbToHexColor(2, 3) to be undefined', () => {
            expect(rgbToHexColor(2, 3)).to.be.undefined;
        });
    });

    describe('Valid Tests', () => {
        it('Expect rgbToHexColor(0, 0, 0) to be equal to "#000000"', () => {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        });

        it('Expect rgbToHexColor(255, 255, 255) to be equal to "#FFFFFF"', () => {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
        });

        it('Expect rgbToHexColor(12, 13, 14) to be equal to "#0C0D0E"', () => {
            expect(rgbToHexColor(12, 13, 14)).to.be.equal('#0C0D0E');
        });
    });

    describe('Invalid Tests', () => {
        it('Expect rgbToHexColor(-1, 0, 0) to be undefined', () => {
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        });

        it('Expect rgbToHexColor(0, -1, 0) to be undefined', () => {
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        });

        it('Expect rgbToHexColor(0, 0, -1) to be undefined', () => {
            expect(rgbToHexColor(-0, 0, -1)).to.be.undefined;
        });

        it('Expect rgbToHexColor(256, 0, 0) to be undefined', () => {
            expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        });

        it('Expect rgbToHexColor(0, 256, 0) to be undefined', () => {
            expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        });

        it('Expect rgbToHexColor(0, 0, 256) to be undefined', () => {
            expect(rgbToHexColor(-0, 0, 256)).to.be.undefined;
        });

        it('Expect rgbToHexColor(3.14, 0, 0) to be undefined', () => {
            expect(rgbToHexColor(3.14, 0, 0)).to.be.undefined;
        });

        it('Expect rgbToHexColor(0, 3.14, 0) to be undefined', () => {
            expect(rgbToHexColor(0, 3.14, 0)).to.be.undefined;
        });

        it('Expect rgbToHexColor(0, 0, 3.14) to be undefined', () => {
            expect(rgbToHexColor(-0, 0, 3.14)).to.be.undefined;
        });
    });
});