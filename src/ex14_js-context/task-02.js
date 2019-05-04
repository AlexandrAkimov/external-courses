function Hangman(word) {
  var arrWord = new Array(word.length).fill('_');
  this.arrWord = arrWord;
  this.errors = 6;
  this.incorrectSymbols = [];
  this.guess = function (letter) {
    var i;
    if (this.errors) {
      if (word.indexOf(letter) === -1) {
        this.errors -= 1;
        this.incorrectSymbols.push(letter);
        console.log('wrong letter, errors left ' + this.errors + ' | ' + this.incorrectSymbols.join(','));
      } else { 
        for (i = 0; i < word.length; i++) {
          if (letter === word.split('')[i]) {
            this.arrWord[i] = word.split('')[i];
          }
        }
        if (this.arrWord.join('') !== word) {
          console.log(this.arrWord.join(''));
        } else {
          console.log(word + '| You won!');
        }
      }
    } else {
      console.log ('No margin for error')
    }
    return this;
  }
  this.startAgain = function (newWord) {
    var arrWord = [];
    arrWord = new Array(word.length).fill('_');
    this.arrWord = arrWord;
    this.errors = 6;
    this.incorrectSymbols = [];
    return this;
  }
  this.getGuessedString = function () {
    console.log (this.arrWord.join(''));
    return this.arrWord.join('');
  }
  this.getErrorsLeft = function () {
    console.log (this.errors);
    return this.errors;
  }
  this.getWrongSymbols = function () {
    console.log (this.incorrectSymbols);
    return this.incorrectSymbols;
  }
  this.getStatus = function () {
    console.log(this.arrWord.join('') + ' | errors left ' + this.errors);
  }
}
module.exports = new Hangman('webpurple');