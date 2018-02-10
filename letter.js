var Letter = function (char) {
    this.stringValue = char;
    this.isVisible = false;
    this.setBoolean = function (char) {
        if (!this.isVisible) {
            console.log('setboolean function hit')
            this.isVisible = true;
            console.log(`Boolean ${this.isVisible}`);
        }

    }
}
Letter.prototype.toString = function () {
    
    if (this.isVisible) {
        console.log('letter to string function hit')
        return this.stringValue;
    }
        // console.log('tostring is false')
        return '_';
}
module.exports = Letter