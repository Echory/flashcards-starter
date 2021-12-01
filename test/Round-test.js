const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;

const Round = require('../src/Round');

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

  });
})