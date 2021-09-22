class Hex {
    constructor(number) {
        this.value = Number(number);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number) {
        if (number instanceof Hex) {
            number = number.value;
        }

        let newValue = this.value + number;
        return new Hex(newValue);
    }

    minus(number) {
        if (number instanceof Hex) {
            number = number.value;
        }

        let newValue = this.value - number;
        return new Hex(newValue);
    }

    parse(text) {
        return parseInt(text, 16);
    }
}

let FF = new Hex(255);
console.log(FF instanceof Hex);
console.log(FF.valueOf(), 255);

let act = FF.toString();
let exp = "0xFF";
console.log(act, exp);

console.log(FF.valueOf() - 1 == 254); // True
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString(); // 165 A5
let exp2 = "0xA5";
console.log(act2, exp2);
let act3 = a.minus(b).toString();
let exp3 = "0x5";
console.log(act3, exp3);
console.log(FF.parse('AAA'));

