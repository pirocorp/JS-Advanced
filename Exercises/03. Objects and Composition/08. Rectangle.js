function solve(width, height, color) {
    color = color.charAt(0).toUpperCase() + color.slice(1);

    const obj = {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        },
    };

    return obj;
}

const rect = solve(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());