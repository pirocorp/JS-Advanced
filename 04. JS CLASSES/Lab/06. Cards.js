let result = (function() {
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    }

    const Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if(!Faces.includes(value)) {
                throw new Error('Invalid card face');
            }

            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!Object.values(Suits).includes(value)) {
                throw new Error('Invalid card suit');
            }

            this._suit = value;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
})();

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
console.log(card);

card.face = 'A';
card.suit = Suits.DIAMONDS;
console.log(card);

let card2 = new Card("1", Suits.DIAMONDS); //Should throw Error