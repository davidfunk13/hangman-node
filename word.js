//Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
var Letter = require('./letter.js');

var Word = function (chosenWord) {
    this.word = chosenWord;
    this.charArray = Array.from(this.word);
    this.letterObjectsArray = [];
    this.returnString = function () {
        for (var i = 0; i < letterObjectsArray.length; i++) {
            console.log(letterObjectsArray[i].beenGussed());
        }
    }
    for (var i = 0; i < this.charArray.length; i++) {
        // console.log(this.charArray[i])
        newLetter = new Letter(this.charArray[i])
        this.letterObjectsArray.push(newLetter);

    }
}
Word.prototype.toString = function () {
    this.letterObjectsArray.join();
}
module.exports = Word;