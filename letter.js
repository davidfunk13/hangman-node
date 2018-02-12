var Letter = function (char) {
    this.stringValue = char;
    this.isVisible = false;
    this.revealCharacter = function () {
        if (this.isVisible) {
            return this.stringValue;
        }
        return ('_');
    }
    this.setBoolean = function (char) {
        if (char === this.stringValue){
            this.isVisible = true;
        }
    }
}
module.exports = Letter