//Use Object.create() to achieve a prototypical inheritance
let person = {
    name: 'George',
    email: 'george@gmail.com',
    sayHello: function () {
        console.log(`Hello ${this.name}!`);
    }
}
let clonedPerson = Object.create(person); // new instance
console.log(Object.getPrototypeOf(clonedPerson));

console.log(clonedPerson === person);
console.log(Object.getPrototypeOf(clonedPerson) === person);
console.log(Object.getPrototypeOf(clonedPerson) === Object.getPrototypeOf(person));
