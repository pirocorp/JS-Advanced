class Card { 
    //Creating private fields face and suit
    //Usinc closure in the constructor
    constructor(inFace, inSuit) {
        let _face;
        let _suit;

        //theese functions are privileged functions
        //they dont hook on prototype of object but are copied into each instance
        this.getFace = function () {
            return _face;
        }

        this.setFace = function (value) {
            if(!Card.validFaces.includes(value)) {
                throw new Error('Invalid Face')
            }

            _face = value;
        }

        this.getSuit = function () {
            return _suit;
        }

        this.setSuit = function (value) {
            if (!Card.validSuits.includes(value)) {
                throw new Error('Invalid Suit')
            }

            _suit = value;
        }

        this.setFace(inFace);
        this.setSuit(inSuit);
    }

    toString() {
        return this.getFace() + this.getSuit();
    }
}

//Card.validFaces = propertyDescriptor
//If you do not know that property exist you cant access it
Object.defineProperty(Card, 'validFaces', {    
    get: (function() {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        validFaces.push = undefined;
        validFaces.pop = undefined;
        validFaces.shift = undefined;
        validFaces.unshift = undefined;

        return function() {
            return validFaces;
        }
    })(),
    enumerable: false,
    configurable: false
});

Object.defineProperty(Card, 'validSuits', {
    get: () => ['♠', '♥', '♦', '♣'],
    //Shows / hides -> default: false - hide
    enumerable: false,
});

const card = new Card('K', '♠');
console.log(Object.keys(Card));

//Only if you know that properties exists you can access it
console.log(Card.validFaces);
console.log(Card.validSuits);

//Cannot change refrence
Card.validFaces = [];

//Cannot modify the value
//Card.validFaces.push('13');

console.log(Card.validFaces);

console.log(card.toString());