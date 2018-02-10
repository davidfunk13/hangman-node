var Letter = require('./Letter');
var Word = require('./word.js');
var inquirer = require('inquirer');
var prompt = require('prompt');
var wordsDude = ['mancheetah', 'spaceship', 'foobar', 'guitar', 'game', 'constructor', 'bulletproof', 'controller', 'instructions', 'annotated',];
var blanksArray = [];
var splitWordArray = [];
var guessedLetters = []
function chooseWord() {
    var wordIndex = Math.floor(Math.random() * 9) + 1;
    var chosenWord = wordsDude[wordIndex];
    var word = new Word(chosenWord);
    console.log(word);
}
chooseWord();
// inquirer.prompt([
//     {
//         name: "guessedLetter",
//         message: 'Please Guess a Letter'
//     }
// ]).then(function (answers) {
//     // var char = answers.guessedLetter
//     // var letter = new Letter(char)
//     // Word.toString();
// })