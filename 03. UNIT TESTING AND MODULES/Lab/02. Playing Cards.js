function makeCard(face, suit) {
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardSuits = ['S', 'H', 'D', 'C'];

    function checkFace(currentFace) {
        if (!validCardFaces.some(c => c === currentFace)) {            
            throw new Error(`Invalid Card: ${face}${suit}`);
        }
    }

    function checkSuit(currentSuit) {
        if (!validCardSuits.some(c => c === currentSuit)) {
            throw new Error(`Ivalid Card: ${face}${suit}`);
        }
    } 
    
    checkFace(face);
    checkSuit(suit);
    
    let cardFace = face;
    let cardSuit = suit;

    return {            
        getFace: () => cardFace,
        getSuit: () => cardSuit,
        
        toString: function() {
            const result = `${this.getFace()}`;

            switch(cardSuit){
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

console.log('' + makeCard('1', 'C'));