var Letter = function (guess) {
    this.stringValue = guess;
    this.beenGuessed = false;
    this.guessCheck = function (guess) {
        if (this.beenGuessed === true) {
            console.log('been guessed');
        }
        if (this.beenGuessed === false) {
            this.beenGuessed = true;
            console.log('now set to true');
        }
    }
}
module.exports = Letter