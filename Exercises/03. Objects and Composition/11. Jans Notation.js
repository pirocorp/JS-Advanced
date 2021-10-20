function solve(arr) {
    const operands = [];
    const operators = [];

    const calc = {
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if(!isNaN(element)){
            operands.push(element);
        } else {
            operators.push(element);

            while (operands.length >= 2 && operators.length >= 1) {
                const b = operands.pop();
                const a = operands.pop();

                const operator = operators.shift();
                const res = calc[operator](a, b);

                operands.push(res);
            }
        }
    }

    if(operands.length > 1) {
        console.log('Error: too many operands!');
    } else if (operators.length > 0) {
        console.log('Error: not enough operands!')
    } else {
        console.log(operands[0])
    }
}

solve([31, 2, '+', 11, '/']);

solve([-1, 1, '+', 101, '*', 18, '+', 3, '/']);