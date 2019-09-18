//function returns iterator object
function reverseArrayIterator(arr) {
    let index = arr.length - 1;

    return {
        next: function() {
            if(index >= 0) {
                return {
                    value: arr[index--],
                    done: false,
                };
            } else {
                return {
                    done: true,
                };
            }
        }
    }
}

const arr = [10, 20, 30, 40, 100, 50];
let iterator = reverseArrayIterator(arr);

while(true) {
    //taking next element from iterator
    let item = iterator.next();

    if (item.done) {
        break;
    }

    console.log(item.value);
}