var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');
var prompt = require('prompt');
var wordsDude = ['mancheetah', 'spaceship', 'foobar', 'guitar', 'game', 'constructor', 'bulletproof', 'controller', 'instructions', 'annotated',];
function chooseWord() {
    var wordIndex = Math.floor(Math.random() * 9) + 1;
    var chosenWord = wordsDude[wordIndex];
    var word = new Word(chosenWord);
    // word.isVisibleCheck();
    var charArray = Array.from(word.word);
    console.log(charArray)
    for (var i = 0; i < charArray.length; i++) {
        var newLetter = new Letter(charArray[i]);
        word.letterObjectsArray.push(newLetter);
    }
    word.isVisibleCheck();
}
chooseWord();
inquirer.prompt([
    {
        name: "guessedLetter",
        message: 'Please Guess a Letter'
    }
]).then(function (answers) {
    var char = answers.guessedLetter;
    // for (var i = 0; )
});