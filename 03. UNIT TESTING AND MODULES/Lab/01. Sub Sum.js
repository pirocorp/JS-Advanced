function subsum(arr, startIndex, endIndex) {
    if(!Array.isArray(arr)) {
        return NaN;
    }

    startIndex = Math.max(0, startIndex);
    endIndex = Math.min(arr.length - 1, endIndex);

    const result = arr
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((r, v) => r + v, 0);
    return result;
}

console.log(subsum('text', 0, 2));