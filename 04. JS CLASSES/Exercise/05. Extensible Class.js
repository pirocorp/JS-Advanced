const Extensible = (function() {
    let counter = 0;

    return class Extensible {
        constructor() {
            this.id = counter;
            counter++;
        }

        //templete is an object
        extend(template) {
            for (let parentProp of Object.keys(template)) {
                //if parrentProp is a function
                if (typeof (template[parentProp]) == "function") {
                    //Add function to prototype of this object
                    Object.getPrototypeOf(this)[parentProp] = template[parentProp];
                } else {
                    //If it's not a function we add property to the object
                    this[parentProp] = template[parentProp];
                }
            }
        }
    }    
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();

obj1.extend({
    foo: 'Test',
    bar: () => {console.log('Hi');},
});

obj1.bar();
console.log(obj1);

console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
