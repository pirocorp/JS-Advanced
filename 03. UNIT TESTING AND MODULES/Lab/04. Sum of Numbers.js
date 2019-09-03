function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

try{
    sum(1, 2, 3);
} catch(ex) {
    console.log(ex.message);
    console.log(ex.name);
}

module.exports = sum;