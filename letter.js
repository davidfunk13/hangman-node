var userGuess = process.argv;
var wordsDude = 'moist';
var blanksArray = [];
var splitWordArray = [];


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
    letterGuessed: false
    this.checkLetter = function (userGuess) {
        if 
    }


}
createBlanks();