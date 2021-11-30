const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a guess', function() {
    const card = new Card();
    const turn = new Turn('Maple syrup', card);
    expect(turn.guess).to.equal('Maple syrup');
  });

  it('should store a card', function() {
    const card = new Card();
    const turn = new Turn('Maple syrup', card);
    expect(turn.card).to.equal(card);
  });

  it('should return guess', function() {
    const card = new Card();
    const turn = new Turn('a guess', card);
    const guess = turn.returnGuess();
    expect(guess).to.equal('a guess');
  });

  it('should return card', function() {
    const card = new Card();
    const turn = new Turn('a guess', card);
    const returnedCard = turn.returnCard();
    expect(returnedCard).to.equal(card);
  });

  it('should indicate if users guess was correct', function() {
    const card = new Card(1, 'Which animal is not a mammal?', ['zebra', 'cat', 'lizard'], 'lizard');
    const turn = new Turn('zebra', card);
    const guessEvaluation = turn.evaluateGuess()
    expect(guessEvaluation).to.equal(false);
  });

  it('should give feedback', function() {
    const card = new Card(1, 'Which animal is not a mammal?', ['zebra', 'cat', 'lizard'], 'lizard');
    const turn = new Turn('zebra', card);
    const guessEvaluation = turn.evaluateGuess();
    const feedback = turn.giveFeedback();
    expect(guessEvaluation).to.equal(false);
    expect(feedback).to.equal('incorrect');
  })
});