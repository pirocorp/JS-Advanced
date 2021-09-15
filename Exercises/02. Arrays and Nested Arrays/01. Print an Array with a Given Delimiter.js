function solve(arr, delimeter) {
    let res = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        res += `${delimeter}${element}`;
    }

    return res;
}

console.log(solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'));

console.log(solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'));