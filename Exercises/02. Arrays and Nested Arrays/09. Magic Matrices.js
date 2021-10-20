function solve(arr) {
    let targetValue = arr[0].reduce((a, b) => a + b);
    let rowsAreEqual = arr.every(row => row.reduce((a, b) => a + b) === targetValue);
    let columnsAreEqual = true;

    for (let i = 0; i < arr.length; i++) {
        const columnValue = arr.reduce((a, b, index, arr) => {
            if(index === 1) {
                return a[i] + b[i];
            }

            return a + b[i];
        });

        if(columnValue !== targetValue) {
            columnsAreEqual = false;
            break;
        }
    }

    return rowsAreEqual && columnsAreEqual;
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));

console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));

console.log(solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));