class Turn {
  constructor(userGuess, card) {
    this.guess = userGuess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
}

module.exports = Turn