const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {
  it('should be function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });
}) 