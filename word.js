var Letter = require('./letter.js');

var Word = function (chosenWord) {
    this.word = chosenWord;
    this.letterObjectsArray = [];
    this.isVisibleCheck = function () {
        var returnedChars = [];
        for (var i = 0; i < this.letterObjectsArray.length; i++) {
           returnedChars.push(this.letterObjectsArray[i].revealCharacter());
        }
        console.log(returnedChars.join(" "));
        var currentWordStatus = Array.from(returnedChars);
        if (currentWordStatus.includes('_')){
        }
        if (!currentWordStatus.includes('_')) {
            this.winToggle = true;
        }

    }
    this.passLetter = function (char) {
        for (var i = 0; i < this.letterObjectsArray.length; i++) {
            this.letterObjectsArray[i].setBoolean(char);
        }
    }
    this.winToggle = false;
}

module.exports = Word;