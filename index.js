var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');
var prompt = require('prompt');
var wordsDude = ['mancheetah', 'spaceship', 'foobar', 'guitar', 'game', 'constructor', 'bulletproof', 'controller', 'instructions', 'annotated',];
var globalWordObject = [];
var guesses = 10;
function livesRemaining(char) {
    var checkArray = Array.from(globalWordObject.word)
    var instance = 0;
    if (guesses > 0) {
        if (checkArray.includes(char)) {
            console.log(`Correct! Word includes the letter ${char}. ${guesses} lives remaining.`)
        }
        if (!checkArray.includes(char)) {
            guesses--
            console.log(`Word does not contain the letter ${char}. ${guesses} lives remaining`)
        }
    }

    if (guesses <= 0) {
        console.log(`..................\nGAME OVER\n...................\n\n The word was "${globalWordObject.word}"`);
    }
}
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
    if (globalWordObject.winToggle === false) {
        if (guesses > 0) {
            inquirer.prompt([
                {
                    name: "guessedLetter",
                    message: 'Please Guess a Letter'
                }
            ]).then(function (answers) {
                var char = answers.guessedLetter.toLowerCase();
                globalWordObject.passLetter(char)
                globalWordObject.isVisibleCheck()
                livesRemaining(char)
                runPrompt()
            });
        }
    }
    if (globalWordObject.winToggle === true) {
        console.log('..........................\nYOU WIN\n............................')
    }
}
chooseWord();
runPrompt();



