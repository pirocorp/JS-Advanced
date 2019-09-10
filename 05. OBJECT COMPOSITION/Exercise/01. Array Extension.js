function solve() {
    (function () {
        Array.prototype.last = function() {
            return this[this.length - 1];
        }

        Array.prototype.skip = function(n) {            
            return this.slice(n);
        }

        Array.prototype.take = function(n) {
            return this.slice(0, n);
        }

        Array.prototype.sum = function() {
            return this.reduce((r, v) => r + v, 0);
        }

        Array.prototype.average = function() {
            return this.sum() / this.length;
        }
    })();

    function getArr() {
        return [1, 2, 3];
    }

    myArr = getArr();
    console.log(myArr.skip(1)[0]);
    console.log(myArr);
    console.log(myArr.skip(1));

    myArr = getArr();
    console.log(myArr.skip(1)[1]);
}
solve();