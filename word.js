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
        console.log(currentWordStatus)
        if (currentWordStatus.includes('_')){
            console.log('more characters remaining');
        }
        if (!currentWordStatus.includes('_')) {
            console.log('YOU WIN!!!!!');
            console.log('..................')
        
        }

    }
    this.passLetter = function (char) {
        // console.log(`Checking ${char}`);
        for (var i = 0; i < this.letterObjectsArray.length; i++) {
            this.letterObjectsArray[i].setBoolean(char);
        }
    }
    // this.isGameComplete = function() {
    //     var checkArray = [];
    //     for (var i = 0; i < this.letterObjectsArray.length; i++) {
    //         checkArray.push(this.letterObjectsArray[i].isVisible)
    //     }
    //     if (checkArray.includes("false")) {
    //         console.log('more to guess')
    //     }
    //     if (!checkArray.includes('false')) {
    //         console.log('game complete')
    //     }

    // }
}

module.exports = Word;