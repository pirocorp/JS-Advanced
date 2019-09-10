function solve() {
    return {
        extend: function(template) {
            //The Object.entries() method returns an array of a given 
            //object's own enumerable string-keyed property [key, value]
            // pairs, in the same order as that provided by a for...in loop 
            //(the difference being that a for-in loop enumerates properties 
            //in the prototype chain as well). 
            const entries = Object.entries(template);
            const currentObjectPrototype = Object.getPrototypeOf(this);

            for (const [key, value] of entries) {
                if(typeof value === 'function') {
                    currentObjectPrototype[key] = value;
                } else {
                    this[key] = value;
                }
            }
        }
    }
}

const extensibleObj = solve();
extensibleObj.extend({
    func1: () => {},
    func2: () => {},
});

console.log(extensibleObj);
console.log(Object.getPrototypeOf(extensibleObj));
