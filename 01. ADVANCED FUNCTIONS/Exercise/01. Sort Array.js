function solve(arr, sortDirection) {
    const sortFunction = (function (sortDirection) {
            if (sortDirection === 'asc') {
                return function(a, b) {
                    return a - b;
                }
            } else if (sortDirection === 'desc') {
                return function(a, b) {
                    return b - a;
                }
            }
        }
    )(sortDirection);
    
    return arr.sort(sortFunction)
}
solve([14, 7, 17, 6, 8], 'asc')