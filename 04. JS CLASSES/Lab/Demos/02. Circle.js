//Accessors Properties Example 
//Accessors are used for validation mostly
class Circle {
    constructor(radius) {   
        //Constructor calls Radius Setter      
        this.radius = radius;
    }

    //Getter Accessor
    get radius() {
        return this._radius;
    }

    //Setter Accessor -> with validation
    set radius(radius) {
        if (radius <= 0) {
            throw new RangeError("Radius must be positive");
        }

        //Convention private members name must start with _
        this._radius = radius;
    }

    //Getter Accessor
    get diameter() {
        return 2 * this.radius
    }

    //Setter Accessor
    set diameter(diameter) {
        //We call radius Setter with result of dimeter / 2
        this.radius = diameter / 2;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    toString() {
        return `{ radius: ${this.radius} }`;
    }
}

let c = new Circle(5);
console.log(c.toString());
console.log(c.diameter);
console.log(c.area);

c.radius = 8;
console.log(c);
console.log(c.diameter);
console.log(c.area);

c.diameter = 12;
console.log(c);
console.log(c.diameter);
console.log(c.area);

c.diameter = -6;

const c2 = new Circle(-3);