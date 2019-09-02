const sum = function (arr) { 
    if(!Array.isArray(arr)) {
        arr = [ ... arguments ];
    }

    if(arr.some(x => typeof x !== 'number')) {
        return NaN;
    }

    return arr.reduce((r, x) => r + +x, 0)
};

const subtract = (a, b) => a - b;

module.exports = {sum, subtract};