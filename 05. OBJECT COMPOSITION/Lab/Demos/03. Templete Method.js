class Mammal {
    toString() {
        const value = this.getValue();
        return value;
    }
}

class Cat extends Mammal {
    getValue() {
        return 'I\'m a Cat';
    }
}