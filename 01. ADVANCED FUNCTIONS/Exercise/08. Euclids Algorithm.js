function solve(num1, num2) {
    while(num2 !== 0) {
        const t = num2;
        num2 = num1 % num2;
        num1 = t;
    }

    return num1;
}
console.log(solve(252, 105));