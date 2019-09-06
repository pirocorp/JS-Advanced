/* class Stringer {
    constructor(inputString, length) {
        this.innerString = inputString;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if(this.innerLength === 0) {
            return '...';
        }

        if(this.innerLength < this.innerString.length) {
            return this.innerString.substr(0, this.innerLength) + '...';
        }

        return this.innerString;
    }
} */

//Before ES6
function Stringer (inputString, length) {
    this.innerString = inputString;
    this.innerLength = length;

    Stringer.prototype.increase = function(length) {
        this.innerLength += length;
    }

    Stringer.prototype.decrease = function(length) {
        this.innerLength -= length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    Stringer.prototype.toString = function() {
        if (this.innerLength === 0) {
            return '...';
        }

        if (this.innerLength < this.innerString.length) {
            return this.innerString.substr(0, this.innerLength) + '...';
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
