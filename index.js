//index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
var Letter = require('./Letter');
var Word = require('./word.js');
var inquirer = require('inquirer');
var prompt = require('prompt');
var wordsDude = ['moist', 'spaceship', 'fart', 'guitar', 'game', 'leakage', 'bulletproof', 'controller', 'instructions', 'annotated',];
var blanksArray = [];
var splitWordArray = [];
function chooseWord() {
    var wordIndex = Math.floor(Math.random() * 9) + 1;
    var chosenWord =  wordsDude[wordIndex];
    console.log('word chosen');
    console.log(chosenWord); 
}
chooseWord();

//inquirer
inquirer.prompt([
    {
        name: "guessedLetter",
        message: 'Please Guess a Letter'
    }
]).then(function(answers){
var guess = answers.guessedLetter
var letter = new Letter(guess)
console.log(letter);
})