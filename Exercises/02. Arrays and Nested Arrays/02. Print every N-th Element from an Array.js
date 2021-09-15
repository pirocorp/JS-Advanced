function solve(arr, step) {
    const res = [];

    for (let i = 0; i < arr.length; i += step) {
        res.push(arr[i]);
    }

    return res;
}