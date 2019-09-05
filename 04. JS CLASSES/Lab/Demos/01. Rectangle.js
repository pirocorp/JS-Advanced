//JS is strongly fuctional language
//We have objects and functions and functions act like an objects

//Simple class example
//Everything in the class must be function (not anymore)
class Rectangle {
    //This is a function
    constructor(width, height, color) {
        //this points to the instance (here this works as expected)
        this.width = width;
        this.height = height;
        this.color = color;
    }

    //functions are added to the prototype of the object not concrete object
    //So for all objects from this type there is one function
    calcArea() {
        //And in functions this points to the instance (works as expected)
        return this.width * this.height;
    }
}
//So in fact class is syntax suggar for function
//So the class definition is a function
//Because functions act like objects we dont need another construction
//Instances we create with new are concrete objects
console.log(Rectangle);
const rect = new Rectangle(5, 5, 'Red');
console.log(rect);
console.log(rect.calcArea());