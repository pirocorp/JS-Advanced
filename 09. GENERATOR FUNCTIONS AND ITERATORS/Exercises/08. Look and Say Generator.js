function* lookAndSay(seed) {
    let prev = seed;

    function _compressElement(input) {
        const inputString = input.toString();
        let result = '';

        if (inputString.length <= 0) {
            return;
        }

        let currentCount = 1;
        let prevChar = inputString[0];

        for (let i = 1; i < inputString.length; i++) {
            const currentChar = inputString[i];
            
            if (prevChar === currentChar) {
                currentCount++;
                prevChar = currentChar;
            } else {
                result += `${currentCount}${prevChar}`;
                currentCount = 1;
                prevChar = currentChar;
            }
        }

        result += `${currentCount}${prevChar}`;
        return result;
    }

    while(true) {
        const current = _compressElement(prev);
        prev = current;

        yield current;
    }
}

let lookSequence = lookAndSay(113);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
