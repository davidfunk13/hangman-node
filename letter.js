
var Letter = function(guess) {
    this.stringValue = guess;
    this.beenGuessed = false;
    this.guessCheck = function (guess) {
        if (this.beenGuessed === true) {
            console.log(this.stringValue);
        }
        if (this.beenGuessed === false){
            console.log('_')
        }
    }
    this.printLetterObject = function() {
        console.log( this.stringValue);
        console.log(this.beenGuessed);
    }
}
module.exports = Letter;