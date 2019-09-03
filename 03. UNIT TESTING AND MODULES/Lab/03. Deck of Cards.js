function printDeckOfCards(arr) {
    function makeCard(face, suit) {
        const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validCardSuits = ['S', 'H', 'D', 'C'];

        function checkFace(currentFace) {
            if (!validCardFaces.some(c => c === currentFace)) {
                throw new Error(`Invalid card: ${face}${suit}`);
            }
        }

        function checkSuit(currentSuit) {
            if (!validCardSuits.some(c => c === currentSuit)) {
                throw new Error(`Invalid card: ${face}${suit}`);
            }
        }

        checkFace(face);
        checkSuit(suit);

        let cardFace = face;
        let cardSuit = suit;

        return {
            getFace: () => cardFace,
            getSuit: () => cardSuit,

            toString: function () {
                const result = `${this.getFace()}`;

                switch (cardSuit) {
                    case 'C':
                        return `${result}\u2663`;
                    case 'D':
                        return `${result}\u2666`;
                    case 'H':
                        return `${result}\u2665`;
                    case 'S':
                        return `${result}\u2660`;
                }
            },
        };
    }

    const deck = [];

    for (const cardString of arr) {
        const currentCardFace = cardString.slice(0, cardString.length - 1);
        const currentCardSuit = cardString.slice(cardString.length - 1);

        try {
            const currentCard = makeCard(currentCardFace, currentCardSuit)
            deck.push(currentCard);
        }
        catch (ex) {
            console.log(ex.message);
            return
        }
    }

    console.log(deck.join(' '));
}
printDeckOfCards(['5S', '3D', 'QD', '1C']);