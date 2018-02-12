var Letter = require('./letter.js');

var Word = function (chosenWord) {
    this.word = chosenWord;
    this.charArray = Array.from(this.word);
    this.letterObjectsArray = [];
    this.isVisibleCheck = function (char) {
        var charReturns = [];
        for (var i = 0; i < this.charArray.length; i++) {
            // console.log(this.charArray[i])
            var newLetter = new Letter(this.charArray[i])
            // console.log(newLetter)
            this.letterObjectsArray.push(newLetter);
            charReturns.push(newLetter.revealCharacter());
        }
        console.log(charReturns.join(" "))
    }
}

module.exports = Word;