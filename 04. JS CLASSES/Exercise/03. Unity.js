class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if(otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);            
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = `${this.name}\n`;

        for (const rat of this.getRats()) {
            result += `##${rat.name}\n`;
        }

        return result;
    }
}

//Before ES6
/* function Rat(name) {
    this.name = name;
    this.unitedRats = [];

    Rat.prototype.unite = function (otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    Rat.prototype.getRats = function () {
        return this.unitedRats;
    }

    Rat.prototype.toString = function () {
        let result = `${this.name}\n`;

        for (const rat of this.getRats()) {
            result += `##${rat.name}\n`;
        }

        return result;
    }
} */

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
