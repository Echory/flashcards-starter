const chai = require('chai');
const Deck = require('../src/Deck');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function() {

  it('should be function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should store a deck', function() {
    const deck = new Deck([]);
    const round = new Round(deck);
    expect(round.deck).to.be.an.instanceOf(Deck);
  });
})