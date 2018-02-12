var Letter = require('./letter.js');

var Word = function (chosenWord) {
    this.word = chosenWord;
    this.letterObjectsArray = [];
    this.isVisibleCheck = function () {
        var returnedChars = [];
        for (var i = 0; i < this.letterObjectsArray.length; i++) {
           returnedChars.push(this.letterObjectsArray[i].revealCharacter());
        }
        console.log(returnedChars.join(" "))
    }
    this.passLetter = function (char) {
        console.log(`Checking ${char}`);
        for (var i = 0; i < this.letterObjectsArray.length; i++) {
            this.letterObjectsArray[i].setBoolean(char);
        }
    }
}

module.exports = Word;