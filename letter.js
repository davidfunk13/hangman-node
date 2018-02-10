var Letter = function (char) {
    this.stringValue = char;
    // console.log(this.stringValue)
    // this.beenGuessed = false;
    this.isVisible = false;

    // this.guessCheck = function () {
    //     if (this.beenGuessed === true) {
    //         console.log('been guessed');
    //     }
    //     if (this.beenGuessed === false) {

    //     }
    // }
    this.setBoolean = function (char) {
        if (this.isVisible) {
            console.log('setboolean function hit')
            this.isVisible = false;
            console.log(`Boolean ${this.isVisible}`);
        }
    }
    // this.toString = function () {
    //     if (this.isVisible) {
    //         console.log('letter to string function hit')
    //         return this.stringValue;
    //     }
    //     console.log('tostring is false');
    //     return '_';
    // }
}
Letter.prototype.toString = function () {

    if (this.isVisible) {
        console.log('letter to string function hit')
        return this.stringValue;
    }
    console.log('tostring is false')
    return '..';
}
module.exports = Letter