//"Module" Pattern (with Object Literal)
let moduleObj = {
    count: 0, // public
    increase: function (num) { return this.count += num },
    decrease: function (num) { return this.count -= num },
    value: function () { return this.count }
};

moduleObj.count = 2; // the counter is accessible
console.log(moduleObj.value()); // 2
console.log(moduleObj.increase(5)); // 7
console.log(moduleObj.decrease(1)); // 6

//
//--------------------------------------------------------------------------
console.log('---------------------------------------------------------------------');
//

//"Module" Pattern (with Closure)
let myModule = (function () {
    let count = 0; // private
    return {
        increase: (num) => count += num,
        decrease: (num) => count -= num,
        value: () => count,
    };
})();

console.log(myModule.value()); // 0
console.log(myModule.increase(5)); // 5
console.log(myModule.decrease(2)); // 3
console.log(myModule.count); // undefined
