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
}

module.exports = Turn