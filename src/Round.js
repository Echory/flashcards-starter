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
    if(turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id);
    }
    this.turns ++;
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    let correctAnswers = this.turns - this.incorrectGuesses.length;
    let totalAnswers = this.turns;
    return Math.floor((correctAnswers / totalAnswers) * 100);
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round

