class Vacationer {
    constructor(fullName, creditCard) {   
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: '',
            securityNumber: 111
        };

        if(creditCard !== undefined && creditCard !== null) {
            this.addCreditCardInfo(creditCard);
        }

        this.wishList = [];
    };

    get fullName() {
        return this._fullName;
    };

    set fullName(input) {
        if(input.length !== 3) {
            throw new Error('Name must include first name, middle name and last name');
        }

        let nameRegex = /\b[A-Z][a-z]+\b/;

        if(!input.every(x => nameRegex.test(x))) {
            throw new Error('Invalid full name');
        }

        const [firstName, middleName, lastName] = input;
        this._fullName = { firstName, middleName, lastName };
    };

    generateIDNumber() {
        const vowels = ['a', 'e', 'o', 'i', 'u'];
        
        let idNumber =  231 * this.fullName.firstName.charCodeAt(0) + 
                        139 * this.fullName.middleName.length;

        const lastChar = this.fullName.lastName[this.fullName.lastName.length - 1];

        if(vowels.includes(lastChar)) {
            return `${idNumber}8`;
        } else {
            return `${idNumber}7`;
        }
    };

    addCreditCardInfo(input) {
        if(input.length !== 3) {
            throw new Error('Missing credit card information');
        }

        const[cardNumber, expirationDate, securityNumber] = input;

        if(typeof cardNumber !== 'number' || typeof securityNumber !== 'number') {
            throw new Error('Invalid credit card details');
        }

        this.creditCard = { cardNumber, expirationDate, securityNumber };
    }

    addDestinationToWishList(destination) {
        if(this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }

        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}` + 
            `\nID Number: ${this.idNumber}` +
            `\nWishlist:` + 
            `\n${this.wishList.length > 0 ? this.wishList.join(', ') : 'empty'}` + 
            `\nCredit Card:` + 
            `\nCard Number: ${this.creditCard.cardNumber}` +
            `\nExpiration Date: ${this.creditCard.expirationDate}` +
            `\nSecurity Number: ${this.creditCard.securityNumber}`;
    }
}

const v = new Vacationer(["Vania", "Ivanova", "Zhivkova"])
v.addDestinationToWishList('Spain');
v.addDestinationToWishList('Germany');
console.log(v.getVacationerInfo());