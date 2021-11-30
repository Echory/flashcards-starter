class Turn {
  constructor(userGuess, card) {
    this.guess = userGuess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if(this.guess === this.card.correctAnswer){
      return true;
    }
    return false;
  }
}

module.exports = Turn