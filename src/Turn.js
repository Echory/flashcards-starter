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
    if(this.guess === this.card.correctAnswer) {
      return true;
    }
    return false;
  }
  giveFeedback() {
    if(this.evaluateGuess === true) {
      return 'correct'
    }
    return 'incorrect'
  }
}

module.exports = Turn