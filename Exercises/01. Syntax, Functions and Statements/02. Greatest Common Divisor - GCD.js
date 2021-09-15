function gcd(a, b) {
    let min = Math.min(Math.abs(a), Math.abs(b));
    let max = Math.max(Math.abs(a), Math.abs(b));

    if(min === 0) {
        return max;
    }

    let gcd = 1;

    for (let i = 2; i <= min; i++) {
        if(min % i === 0 && max % i === 0){
            gcd = i;
        }        
    }

    return gcd;
}

function euclidGcd(a, b) {
    while(b != 0) {
        const t = b;
        b = a % b;
        a = t;
    }

    return a;
}

console.log(gcd(15, 5));
console.log(gcd(2154, 458));
console.log(euclidGcd(15, 5));
console.log(euclidGcd(2154, 458));