var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');
var prompt = require('prompt');
var wordsDude = ['mancheetah', 'spaceship', 'foobar', 'guitar', 'game', 'constructor', 'bulletproof', 'controller', 'instructions', 'annotated',];
var globalWordObject = [];
var guesses = 10;

function chooseWord() {
    var wordIndex = Math.floor(Math.random() * 9) + 1;
    var chosenWord = wordsDude[wordIndex];
    var word = new Word(chosenWord);
    var charArray = Array.from(word.word);
    // console.log(charArray)
    for (var i = 0; i < charArray.length; i++) {
        var newLetter = new Letter(charArray[i]);
        word.letterObjectsArray.push(newLetter);
    }
    word.isVisibleCheck();
    globalWordObject = word
}
function runPrompt() {
    inquirer.prompt([
        {
            name: "guessedLetter",
            message: 'Please Guess a Letter'
        }
    ]).then(function (answers) {
        var char = answers.guessedLetter;
        // word.passLetter(char)
        console.log(char)
        globalWordObject.passLetter(char)
        globalWordObject.isVisibleCheck()
        guesses--
        console.log(`You have ${guesses} guesses remaining`)
        if (guesses === 0) {
            console.log('game over')
        }
        runPrompt()
    });
}
chooseWord();
runPrompt();
function livesRemaining (char) {
    var checkArray = Array.from(globalWordObject)
    console.log(checkArray)
    var instance = 0;
    for (var i = 0; i < checkArray.length; i++) {
        if (char === checkArray[i]) {
            instance++
            if (instance >= 1) {
                console.log('no lives lost')
                runPrompt();
            }
            if (instance === 0) {
                console.log(`Does not contain ${char}, guess again. Minus one life.`);
                lives--;
                console.log(`You have ${lives} remaining.`)
            }
        }
    }
}




