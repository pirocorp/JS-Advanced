//There is no class. Just objects
const fatherCar = {
    brand: 'BMW',
    model: 'X5',
    color: 'blue',
    toString: function() {return `brand: ${this.brand}, model: ${this.model}, color: ${this.color}`}
}

//myCar will inherit fatherCar
const myCar = Object.create(fatherCar);
myCar.model = 'M4';
myCar.color = 'red';
console.log('' + myCar);

//workCar inherit fatherCar and add additional property type
const workCar = Object.create(fatherCar);
workCar.model = 'i3';
workCar.type = 'electric';
workCar.toString = function() {
    //we get prototype of this object
    const prototype = Object.getPrototypeOf(this);
    //with prototype.toString() we call toString() function from parent object
    return prototype.toString() + `, type: ${this.type}`;
};
console.log('' + workCar);