class Company {
    constructor() {
        this.departments = {};

        this.addEmployee = this.addEmployee.bind(this);
        this.bestDepartment = this.bestDepartment.bind(this);
    }

    addEmployee(name, salary, position, department) {
        if (!name 
            || !salary 
            || !position 
            || !department 
            || salary < 0) {

            throw new Error('Invalid input!');
        }

        if(!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({
            name,
            salary,
            position
        });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    };

    bestDepartment() {
        const arr = Object.entries(this.departments)
            .map(([name, employees]) => ({
                name: name,
                employees: employees,
                averageSalary: employees.map(e => e.salary).reduce((a, b) => a + b) / employees.length,
            }));

        arr.forEach(d => d.employees.sort((e1, e2) => {
            if(e2.salary - e1.salary === 0) {
                return e1.name > e2.name ? 1 : -1;
            }

            return e2.salary - e1.salary
            }));

        arr.sort((d1, d2) => d2.averageSalary - d1.averageSalary);

        const bestDepartment = arr[0];

        const result = [];

        result.push(`Best Department is: ${bestDepartment.name}`);
        result.push(`Average salary: ${bestDepartment.averageSalary.toFixed(2)}`);
        bestDepartment.employees.forEach(e => result.push(`${e.name} ${e.salary} ${e.position}`))

        return result.join('\n')
    }
}

const c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
