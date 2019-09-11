function solve() {

    class Figure {
        constructor() {
            if (this.constructor === Figure) {
                throw new TypeError('Abstract class "Figure" cannot be instantiated directly.');
            }
        }

        toString() {
            const type = this.constructor.name;
            const props = Object.getOwnPropertyNames(this)
                .map(p => `${p}: ${this[p]}`)
                .join(', ');


            return `${type} - ${props}`;
        }
    };

    class Circle extends Figure {
        constructor(r) {
            super();
            this.radius = r;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }
    };

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }
    };

    return{
        Figure, 
        Circle, 
        Rectangle,
    };
}

const { Figure, Circle, Rectangle } = solve();

let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3, 4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4
