function solve(number) {
    let digit = number % 10;
    let numberAsString = `${number}`;
    let result = true;

    for (let i = 0; i < numberAsString.length; i++) {
        let currentDigit = Number(numberAsString[i]);

        if (currentDigit !== digit) {
            result = false;
            break;
        }
    }

    function sum(num) {
        let sum = 0

        while (num !== 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    console.log(result);
    console.log(sum(Number(number)));
}

solve(2222222);
solve(1234);