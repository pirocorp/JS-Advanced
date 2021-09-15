function solve(arr, rotations) {
    rotations = rotations % arr.length;

    for (let i = 0; i < rotations; i++) {
        let swap = arr.pop();
        arr.unshift(swap);
    }

    console.log(arr.join(' '));
}

solve(['1',
    '2',
    '3',
    '4'],
    2
)

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)