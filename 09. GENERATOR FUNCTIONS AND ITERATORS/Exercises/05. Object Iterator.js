function makeIterable(obj, sortFunc) {
    let keys;

    if(sortFunc) {
        keys = Object.keys(obj).sort((a, b) => sortFunc(a, b));
    } else {
        keys = Object.keys(obj);
    }

    //Generator IIFE -> produces iterator
    return (function* () {
        for (let i = 0; i < keys.length; i++) {
            yield keys[i]
        }
    })();
}

let obj = { age: 27, name: "pesho", book: "Lord of the Rings" };
let iterator = makeIterable(obj, (a, b) => b.localeCompare(a));

while(true) {
    let res = iterator.next();
    if(res.done) {
        break;
    }

    console.log(res.value);
}