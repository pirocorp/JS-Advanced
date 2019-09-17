class Employee {
    constructor(name, age) {
        if (new.target === Employee) {
            throw new Error('Canot instantiate directly.');
        }

        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    };

    work() {
        const currentTask = this.tasks.shift();
        console.log(this.name + currentTask);
        this.tasks.push(currentTask);
    };

    getSalary() {
        return this.salary;
    };

    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    };
};

module.exports = Employee;