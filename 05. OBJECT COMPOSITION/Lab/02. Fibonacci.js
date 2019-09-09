function getFibonator() {
    let current = 0;
    let next = 1;

    return function() {
        const result = current + next;
        current = next;
        next = result;

        return current;
    }
}

const fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());