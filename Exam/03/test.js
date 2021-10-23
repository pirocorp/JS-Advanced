const { expect } = require('chai');
const library = require('./library');
describe("Library Tests", () => {
    describe("calcPriceOfBook Tests", () => {
        it('Work with valid new books', () => {
            expect(library.calcPriceOfBook('Harry Potter', 2000)).to.be.equal('Price of Harry Potter is 20.00');
            expect(library.calcPriceOfBook('Хитър Петър', 1980)).to.be.equal('Price of Хитър Петър is 10.00');
        });

        it("Validates input", () => {
            expect(() => library.calcPriceOfBook([], 2020)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({}, 2020)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(1, 2020)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(2.5, 2020)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(NaN, 2020)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(null, 2020)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(undefined, 2020)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(() => {}, 2020)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(function x() {}, 2020)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Hary Potter', [])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Hary Potter', {})).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Hary Potter', '1')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Hary Potter', 2.5)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Hary Potter', NaN)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Hary Potter', null)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Hary Potter', undefined)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Hary Potter', () => {})).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Hary Potter', function x() {})).to.throw('Invalid input');
        })
    });

    describe("findBook Tests", () => {
        it('Throw error if array of books is zero', () => {
            expect(() => library.findBook([], 'Troy')).to.throw('No books currently available');
        });

        it('Finds desired book if exists', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.be.equal('We found the book you want.');
        });

        it('Doesn\'t finds desired book if not exists', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Mass Effect')).to.be.equal('The book you are looking for is not here!');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Tor')).to.be.equal('The book you are looking for is not here!');
        });
    });

    describe("arrangeTheBooks Tests", () => {
        it('Works fine when books in range', () => {
            expect(library.arrangeTheBooks(0)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(1)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(15)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(21)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(39)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
        });

        it('Returns message when books are out of range', () => {
            expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(150)).to.be.equal('Insufficient space, more shelves need to be purchased.');
        });

        it('Validates input', () => {
            expect(() => library.arrangeTheBooks(1.5)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1.5)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('4')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('asd')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(NaN)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(null)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(undefined)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(() => {})).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(function x() {})).to.throw('Invalid input');
        });
    });
});