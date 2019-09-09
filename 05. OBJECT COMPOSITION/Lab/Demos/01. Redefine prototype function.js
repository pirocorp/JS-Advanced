//It's not a good idea to extend the prototype
Array.prototype.toString = function() {
    return this.join('\n');
};

let arr = [1, 2, 3];

let myArr = ['Pesho', 'Gosho', 'Maria'];

console.log(arr.toString());
console.log(myArr.toString());