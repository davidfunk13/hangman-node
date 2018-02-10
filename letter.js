var Letter = function (char) {
    this.stringValue = char;
    // this.beenGuessed = false;
    this.isVisible = false;

    // this.guessCheck = function () {
    //     if (this.beenGuessed === true) {
    //         console.log('been guessed');
    //     }
    //     if (this.beenGuessed === false) {

    //     }
    // }
    this.setBoolean = function (guess) {
        if (this.beenGuessed === false)
        this.beenGuessed = true;
    }
}
Letter.prototype.toString = function () {
    if (this.isVisible) {
        return this.stringValue;
    }
    return '..';
}
module.exports = Letter