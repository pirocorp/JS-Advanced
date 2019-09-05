//Before ES2015 (ES6) classes were composed manually 
//Constructor function defines class data
//class works behind the scene this way 
function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    //Behavior (methods) is later attached to the prototype
    //prototype of the class contains only methods of the class

    Rectangle.prototype.calcArea = function () {
        return this.width * this.height;
    }
}


//creating an instance
let rect = new Rectangle(3, 5);
console.log(rect);
//Objects have access to all methods of the prototype of the class
console.log(rect.calcArea());