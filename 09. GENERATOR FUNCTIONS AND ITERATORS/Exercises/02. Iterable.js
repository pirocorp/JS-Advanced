//Iterables in JS - Using for … of for User-Defined Objects
//Iterable is an object that holds an iterator object under a key Symbol.iterator
function reverseArrayIterable(arr) {
    let index = arr.length - 1;

    return {
        [Symbol.iterator]: function() {
            return this;
        },
        ['next']: function() {
            if(index >= 0) {
                return {
                    value: arr[index--],
                    done: false,
                };
            } else {
                return {
                    done: true,
                }
            }
        }
    }
}

let arr = [10, 20, 30, 40, 100, 50];

for (const x of reverseArrayIterable(arr)) {
    console.log(x);
}