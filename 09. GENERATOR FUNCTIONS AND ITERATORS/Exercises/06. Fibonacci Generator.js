function* fibonacci() {
    let current = 0;
    let next = 1

    while (true) {
        const temp = current;
        current = next;
        next += temp;

        yield current;
    }
}

let fib = fibonacci();

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
console.log(fib.next());