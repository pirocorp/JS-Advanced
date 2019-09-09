const getFibonator = function* () {
    let currentNumber = 0;
    let nextNumber = 1;
    
    while(true) {
        const result = currentNumber;
        currentNumber = nextNumber;
        nextNumber = currentNumber + result;
        yield result;
    }
};

const fib = getFibonator();
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());