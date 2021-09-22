function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    //Before ES6 Syntax
    /* function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    } */

    const tickets = [];

    for (const inputLine of arr) {
        const [destination, price, status] = inputLine.split('|');
        const currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket);
    }

    switch (criteria) {
        case 'destination':
            tickets.sort((a, b) => {
                return a.destination.localeCompare(b.destination);
            });
            break;
        case 'price':
            tickets.sort((a, b) => {
                return a.price - b.price;
            });
            break;
        case 'status':
            tickets.sort((a, b) => {
                return a.status.localeCompare(b.status);
            });
            break;
    }

    return tickets;
}