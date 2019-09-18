function* random(seed) {
    let prev = seed;
    let mod = 4871 * 7919;

    while (true) {
        let current = ((prev * prev) % mod);
        prev = current;

        yield current % 100;
    }
}

let rnd = random(100);

for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}