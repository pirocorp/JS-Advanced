const expect = require('chai').expect;
const isOddOrEven = require('../00.isOddOrEven');

describe("even or odd", () => {
    it("isString", () => {
        expect(isOddOrEven(3)).to.undefined;
    });

    it('isOdd', () => {
        expect(isOddOrEven('s')).to.equal('odd');
    })

    it('isEven', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    })
});

describe("Test group #2", function () {

});