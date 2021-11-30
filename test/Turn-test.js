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
});