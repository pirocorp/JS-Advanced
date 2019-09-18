function* reverseGenerator(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
       yield arr[i];        
    }
}

let arr = [10, 20, 30, 40, 100, 50];

for (const x of reverseGenerator(arr)) {
    console.log(x);
}