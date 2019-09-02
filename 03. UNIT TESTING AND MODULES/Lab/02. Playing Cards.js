function makeCard(face, suit) {
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardSuits = ['S', 'H', 'D', 'C'];

    function checkFace(currentFace) {
        if (!validCardFaces.some(c => c === currentFace)) {
            throw new Error("Invalid Card Face");
        }
    }

    function checkSuit(currentSuit) {
        if (!validCardSuits.some(c => c === currentSuit)) {
            throw new Error("Ivalid Card Suit");
        }
    } 
    
    checkFace(face);
    checkSuit(suit);
    
    let cardFace = face;
    let cardSuit = suit;

    return {            
        getFace: () => cardFace,
        getSuit: () => cardSuit,
        setFace: (newFace) => {
            checkFace(newFace);
            cardFace = newFace;
        },
        setSuit: (newSuit) => {
            checkSuit(newSuit);
            cardSuit = newSuit;
        },
        toString: () => {
            switch(cardSuit){
                case 'C':
                    return `${cardFace}\u2663`;
                case 'D':
                    return `${cardFace}\u2666`;
                case 'H':
                    return `${cardFace}\u2665`;
                case 'S':
                    return `${cardFace}\u2660`;
            }
        },
    };
}

console.log('' + makeCard('A', 'C'));