const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of a Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should store a deck', function() {
    const deck = new Deck([]);
    const round = new Round(deck);
    expect(round.deck).to.be.an.instanceOf(Deck);
  });

  it('should return current card', function() {
    const card = new Card(1,
    "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"],
    "object");
    const deck = new Deck([card]);
    const round = new Round(deck);
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card);
  });

  it('should create a new instance of turn', function() {
    const card = new Card(1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object");
    const turn = new Turn("object", card);
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should update turn count whether guess is correct or incorrect', function() {
    const card = new Card(1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object");
    const deck = new Deck([card]);   
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
  });

  it('should change the next card in deck to be current card', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(4, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);

    let result = round.returnCurrentCard();
    expect(result).to.deep.equal(card1);
    round.takeTurn('array');
    result = round.returnCurrentCard();
    expect(result).to.deep.equal(card2);
    round.takeTurn('array');
    result = round.returnCurrentCard();
    expect(result).to.deep.equal(card3);
  });

  it('should store incorrect guesses', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('array');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('object');
    expect(round.incorrectGuesses).to.deep.equal([1, 2]);
  });

  it('should return correct for a correct guess', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");

    const deck = new Deck([card1, card2]);
    const round = new Round(deck);

    const response = round.takeTurn("object");
    expect(response).to.equal("correct")
  });

  it('should return incorrect for an incorrect guess', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");

    const deck = new Deck([card1, card2]);
    const round = new Round(deck);

    const response = round.takeTurn("function");
    expect(response).to.equal("incorrect")
  });
})