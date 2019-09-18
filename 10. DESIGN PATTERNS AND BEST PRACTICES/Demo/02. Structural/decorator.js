class Employee {
    constructor(name, yearsOfWork, title, seniority) {
        this.name = name;
        this.yearsOfWork = yearsOfWork;
        this.title = title;
        this.seniority = seniority;
    }
}

//Decorator pattern
const decorateEmployee = (e) => {
    if(e.yearsOfWork > 2) {
        return new Employee(e.name, e.yearsOfWork, e.title, "regular");
    }

    return e;
};

const decorator2 = (e) => e;

let employee = new Employee("Pesho", 3, "QA", 'junior');

console.log(employee);
employee = decorator2(decorateEmployee(employee));
console.log(employee);
