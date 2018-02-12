var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');
var prompt = require('prompt');
var wordsDude = ['mancheetah', 'spaceship', 'foobar', 'guitar', 'game', 'constructor', 'bulletproof', 'controller', 'instructions', 'annotated',];
var globalWordObject = [];
var guesses = 10;
function livesRemaining(char) {
    var checkArray = Array.from(globalWordObject.word)
    console.log(checkArray)
    var instance = 0;
if (checkArray.includes(char)) {
    console.log(`Correct! Word includes the letter ${char}. ${guesses} lives remaining.`)
}
    if (!checkArray.includes(char)) {
        console.log('nah yo')
        guesses--
        console.log(`Word does not contain the letter ${char}. ${guesses} lives remaining`)
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
    inquirer.prompt([
        {
            name: "guessedLetter",
            message: 'Please Guess a Letter'
        }
    ]).then(function (answers) {
        var char = answers.guessedLetter;
        // word.passLetter(char)
        globalWordObject.passLetter(char)
        globalWordObject.isVisibleCheck()
        livesRemaining(char)
        // var checkArray = Array.from(globalWordObject.word);
        // for (var i = 0; i < checkArray.length; i++) {
        //     if (checkArray[i])
        // }
        // guesses--
        // console.log(`You have ${guesses} guesses remaining`)
        // if (guesses === 0) {
        //     console.log('game over')
        // }
        runPrompt()

    });
}
chooseWord();
runPrompt();



