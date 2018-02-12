var Letter = function (char) {
    this.stringValue = char;
    this.isVisible = false;
    this.revealCharacter = function (hello) {
        if (this.isVisible) {
            console.log('letter to string function hit')
            return this.stringValue;
        }
        return ('_');
    }
    this.setBoolean = function (char) {
        // console.log(`made it to boolean with ${char}`)
        if (char === this.stringValue){
            console.log('ayo')
        }
        if (char !== this.stringValue) {
            console.log('no dice')
        }
        // if (!this.isVisible) {
        //     console.log('setboolean function hit')
        //     this.isVisible = true;
        //     console.log(`Boolean ${this.isVisible}`);
        // }

    }
}
module.exports = Letter