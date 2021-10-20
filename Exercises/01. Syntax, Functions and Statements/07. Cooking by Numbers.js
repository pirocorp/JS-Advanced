function solve(...params) {
    let currentValue = +params[0];

    for (let i = 1; i < params.length; i++) {
        let currentCommand = params[i];
        currentValue = processCommand(currentCommand, currentValue);
        console.log(currentValue);
    }

    function processCommand(currentCommand, currentValue) {
        switch (currentCommand) {
            case "chop": return currentValue / 2;
            case "dice": return Math.sqrt(currentValue);
            case "spice": return ++currentValue;
            case "bake": return currentValue * 3;
            case "fillet": return currentValue * 0.8;
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')