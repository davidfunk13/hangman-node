// var userGuess = 'a';
// var userGuess2 ='c';
// var userGuess3 = 'e';
// var userGuess4 = 'i';
// var userGuess5 = 'o';
// var userGuess6 = 'u';
// var userGuess7 = 'd';
//Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
//   * 
// var wordsDude = ['moist', 'spaceship', 'fart', 'guitar', 'game', 'leakage', 'bulletproof', 'controller', 'instructions', 'annotated',];
// var blanksArray = [];
// var splitWordArray = [];

// function splitChosenWord() {
//     var wordIndex = Math.floor(Math.random() * 9) + 1  
//     console.log(wordIndex);
//     var chosenWord = wordsDude[wordIndex];
//     console.log(chosenWord);
//     splitWordArray = Array.from(chosenWord);
// }


// function createBlanks() {
//     for (var i = 0; )
// }

var Letter = function(userGuess) {
    this.stringValue = userGuess.toString();
    this.letterGuessed = false;
    console.log(this.letterGuessed)
    this.checkLetter = function (userGuess) {
        if (letterGuessed = true) {
            console.log('correct');
        } if (letterGuessed === false) {
            console.log('incorrect')
        }
    }
}
module.exports = Letter;