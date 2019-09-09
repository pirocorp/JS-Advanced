class Calculator {
    constructor() {
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }

    add() {
        console.log(this);
    }

    subtract() {
        console.log(this);
    }
}

const calculator = new Calculator();

//bind can be in constructor or here
document.querySelector('#to-click')
    .addEventListener('click', calculator.add);