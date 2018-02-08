var userGuess = process.argv;
var wordsDude = ['moist', 'spaceship', 'fart', 'guitar', 'game', 'leakage', 'bulletproof', 'controller', 'instructions', 'annotated',];
var blanksArray = [];
var splitWordArray = [];

function splitChosenWord() {
    var wordIndex = Math.floor(Math.random() * 9) + 1  
    console.log(wordIndex);
    var chosenWord = wordsDude[wordIndex];
    console.log(chosenWord);
}


function createBlanks() {
    var charactersDude = Array.from(wordsDude);
    splitWordArray = charactersDude
    console.log(charactersDude)
    for (var i = 0; i < charactersDude.length; i++) {
        blanksArray.push('_');
    }
    console.log(blanksArray);
}

function Letter(userGuess) {
    this.stringValue = userGuess.toString();
    this.letterGuessed = false
    this.checkLetter = function (userGuess) {
        if (letterGuessed = true) {
            console.log('correct');
        } if (letterGuessed === false) {
            console.log('incorrect')
        }
    }


}
// createBlanks();
splitChosenWord();