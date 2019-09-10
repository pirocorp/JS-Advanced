(function(){
    String.prototype.ensureStart = function(str) {
        let result = this;

        if(!this.startsWith(str)) {
            result = `${str}${this}`;
        } 

        return `${result}`;
    };

    String.prototype.ensureEnd = function(str) {
        let result = this;

        if (!this.endsWith(str)) {
            result = `${this}${str}`;
        }

        return `${result}`;
    };

    String.prototype.isEmpty = function() {
        if(`${this}` === '') {
            return true;
        } else {
            return false;
        }
    };

    String.prototype.truncate = function(n) {
        let result = this;

        if (this.length <= n) {
            return `${result}`;
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        while(result.lastIndexOf(' ') >= 0) {
            result = result.slice(0, result.lastIndexOf(' '));

            if(result.length + 3 <= n) {
                return `${result}...`
            }
        }

        return result.slice(0, n - 3) + '...';
    }

    String.format = function(str, ...params) {
        for (let i = 0; i < params.length; i++) {
            const currentParam = params[i];
            str = str.replace(`{${i}}`, currentParam);
        }

        return str;
    }
})();

let str = 'mystring';
console.log(str.ensureStart('my'));
console.log(str.ensureStart('hello'));
console.log(str.truncate(150));
console.log(str.truncate(3));

str = 'Hellothisismystring';
console.log(str.truncate(10));

str = 'Hello this is my string';
console.log(str.truncate(15));

console.log('---------------');

str = 'The {0} {1} fox';
console.log(String.format(str, 'quick', 'brown'));

str = '';
console.log(str.isEmpty());