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