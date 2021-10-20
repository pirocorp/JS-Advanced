function solve(arr) {
    arr.sort((a, b) => {
        if(a.length - b.length === 0) {
            return a.localeCompare(b);
        }

        return a.length - b.length;
    });

    arr.forEach(element => {
       console.log(element); 
    });
}

solve(['alpha',
    'beta',
    'gamma']);

console.log('------------------------');

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);

console.log('------------------------');

solve(['test',
    'Deny',
    'omen',
    'Default']);