//Static methods example
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //Static Methods are attached to the class
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }

    distanceTo(b) {
        const dx = this.x - b.x;
        const dy = this.y - b.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}

let p1 = new Point(1, 2);
let p2 = new Point(4, 6);
console.log(p1);
console.log(p2);

//Static methods are called from the class
console.log(Point.distance(p1, p2));

//Not Static methods are attached to prototype of the instance
//So they can be called from the instance
console.log(p1.distanceTo(p2));

//Static methods cannot be called from the instance
console.log(p1.distance(p1, p2));