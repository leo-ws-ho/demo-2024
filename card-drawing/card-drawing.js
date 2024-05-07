const cards = initialiseCards();

function initialiseCards() {
    let result = [];
    const suits = ['S', 'H', 'D', 'C'];
    const ranks = "AKQJT98765432";
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < ranks.length; j++) {
            result.push(suits[i] + ranks[j]);
        }
    }
    return result;
}

function drawACard(deck = cards) {
    let index = Math.floor(Math.random() * deck.length);
    return deck[index];
}


/**
 * @description Draw five poker cards
 * @returns Array stores the five cards.  e.g., ["H9", "DT", "SA", "H3", "D7"]
 */
function drawFiveCards() {
    let result = [];
    for (let i = 0; i < 5; i++) {
        let card = "";
        do {
            card = drawACard();
        } while (result.includes(card));
        result.push(card);
    }
    return result;
}

const hand = drawFiveCards();
console.log(hand.join(' '));

