function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));

    let i = 1;

    arr.forEach(element => {
        console.log(`${i++}.${element}`);
    });
}

solve(["John", "bob", "Christina", "Ema"])