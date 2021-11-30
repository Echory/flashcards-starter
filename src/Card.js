class Card {
  constructor(num, question, arrAnswers, answer) {
    this.question = question;
    this.answers = arrAnswers;
    this.correctAnswer = answer;
  }
}

module.exports = Card;