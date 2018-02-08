//index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
var Letter = require('./Letter');
var Word = require('./word.js');
var inquirer = require('inquirer');
var prompt = require('prompt');

var userGuess = new Letter(process.argv[2])