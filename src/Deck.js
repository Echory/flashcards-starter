class Deck {
  constructor(cardsArr) {
    this.cards = cardsArr;
  }
  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck