var Letter = require('./letter.js');

var Word = function (chosenWord) {
    this.word = chosenWord;
    this.charArray = Array.from(this.word);
    this.letterObjectsArray = [];
    // this.check = function (char) {
    //     for (var i = 0; i < this.letterObjectsArray.length; i++) {
    //         console.log(letterObjectsArray[i])
    //     }
    // }
    this.isVisibleCheck = function (char) {
        for (var i = 0; i < this.charArray.length; i++) {
            // console.log(this.charArray[i])
            newLetter = new Letter(this.charArray[i])
            // console.log(newLetter)
            this.letterObjectsArray.push(newLetter);
        }
    }
}

module.exports = Word;