const { expect } = require('chai');
const cinema = require('./cinema');

describe('Cinema Tests', () => {
    describe('Show Movies Tests', () => {
        it('Works with valid parameters', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.be.equal('King Kong, The Tomorrow War, Joker');
            expect(cinema.showMovies(['King Kong'])).to.be.equal('King Kong');
        });

        it('Return error message when empty arry is passed', () => {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });

        it('Faked Array Test', () => {
            const x = ['Lion King'];
            x.length = 0;

            expect(cinema.showMovies(x)).to.be.equal('There are currently no movies to show.');
        })
    });

    describe('Ticket Price Tests', () => {
        it('Get correct price for Premiere', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.5);
        });

        it('Throws error if projection type is missing', () => {
            expect(() => cinema.ticketPrice('missing')).to.be.throw('Invalid projection type.');
        });
    });

    describe('Swap Seats In Hall Tests', () => {
        it('Works with valid input', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 1)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 19)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(19, 20)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 12)).to.be.equal('Successful change of seats in the hall.');
        });

        it('Returns error message with invalid input', () => {
            expect(cinema.swapSeatsInHall(0, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-5, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, -5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(9, 9)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-3, -3)).to.be.equal('Unsuccessful change of seats in the hall.');

            expect(cinema.swapSeatsInHall()).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(9)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall([], [])).to.be.equal('Unsuccessful change of seats in the hall.');

        });
    });
})