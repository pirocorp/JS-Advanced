function solve() {
    const result = {

    }

    const args = [];
    
    for (let i = 0; i < arguments.length; i++) {
        const currentArgument = arguments[i];
        const typeOfCurrentArgument = typeof currentArgument;

        if (!result.hasOwnProperty(typeOfCurrentArgument)) {
            result[typeOfCurrentArgument] = [];
        }

        result[typeOfCurrentArgument]++;

        args.push(`${typeOfCurrentArgument}: ${currentArgument}`);
    }

    for (const currentArg of args) {
        console.log(currentArg);
    }

    const sortedKeys = Object.keys(result).sort((a, b) => result[b] - result[a]);

    for (const key of sortedKeys) {
        console.log(`${key} = ${result[key]}`);
    }
}
solve({ name: 'bob' }, 3.333, 9.999);