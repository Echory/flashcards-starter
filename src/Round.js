const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    if(turn.evaluateGuess === false) {
      this.incorrectGuesses.push(guess);
    }
    this.turns ++;
    return turn.giveFeedback();
  }
}

module.exports = Round

