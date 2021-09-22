class Rectangle {
    constructor(width, height, color) {
        this.height = height;
        this.width = width;
        this.color = color;

        this.calcArea = this.calcArea.bind(this);
    }

    calcArea() {
        return this.height * this.width;
    }

    static staticMethod() {
        return 'static call';
    }
}

// Old School
/* function Rectangle(width, height, color) {
    const obj = {
        width,
        height,
        color,
        calcArea: function () {
            return this.width * this.height;
        },
    };

    obj.calcArea = obj.calcArea.bind(obj);

    return obj;
} */


const rect = new Rectangle(4, 5, 'Red');
const calc = rect.calcArea;
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
console.log(calc());