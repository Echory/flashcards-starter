class Card {
  constructor(num, question, arrAnswers, answer) {
    this.id = num;
    this.question = question;
    this.answers = arrAnswers;
    this.correctAnswer = answer;
  }
}

module.exports = Card;