function solve(arr) {
    arr.sort((a, b) => a - b);

    let res = [];

    while(arr.length > 0) {

        let smallest = arr.shift();
        let biggest = arr.pop();
        
        res.push(smallest);
        
        if(biggest) {
            res.push(biggest);
        }
    }

    return res;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));