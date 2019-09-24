class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget  = budget ;
        this.employees = [];
        
        this.marketingBudget = 0.4 * budget;
        this.financeBudget = 0.25 * budget;
        this.productionBudget = 0.35 * budget;
    };

    get departmentsBudget() {
        return {
            marketing: this.marketingBudget,
            finance: this.financeBudget,
            production: this.productionBudget,
        }
    };

    add(employeeName, department, salary) {
        const currentDepartmentBudget = this._departmentBudget(department);

        if(currentDepartmentBudget < salary) {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${currentDepartmentBudget}.`
        }

        const currentEmployee = {
            employeeName,
            department,
            salary
        }

        this.employees.push(currentEmployee);
        this._departmentBudget(department, currentDepartmentBudget - salary);
        return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
    };

   employeeExists(employeeName) {
        const employee = this.employees
            .filter(e => e.employeeName === employeeName)[0];

        if(employee === null || employee === undefined) {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        } else {
            return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`;
        }
    };

    leaveOrganization(name) {
        for (let i = 0; i < this.employees.length; i++) {
            const employee = this.employees[i];

            if (employee.employeeName === name) {
                //_departmentBudget(department, _departmentBudget(department) + employee.salary);
                this.employees.splice(i, 1);
                return `It was pleasure for ${this.name} to work with Mr./Mrs. ${name}.`;
            }
        }

        return `Mr./Mrs. ${name} is not working in ${this.name}.`;
    }

    status() {
        let sortedEmployees = this.employees.sort((a, b) => b.salary - a.salary)

        let result = `${this.name.toUpperCase()} DEPARTMENTS:`;
        const marketingEmployees = sortedEmployees.filter(e => e.department === 'marketing');
        const financeEmployees = sortedEmployees.filter(e => e.department === 'finance');
        const productionEmployees = sortedEmployees.filter(e => e.department === 'production');
        result += `\nMarketing | Employees: ${marketingEmployees.length}: ${marketingEmployees.map(e => e.employeeName).join(', ')} | Remaining Budget: ${this.marketingBudget}`;
        result += `\nFinance | Employees: ${financeEmployees.length}: ${financeEmployees.map(e => e.employeeName).join(', ')} | Remaining Budget: ${this.financeBudget}`;
        result += `\nProduction | Employees: ${productionEmployees.length}: ${productionEmployees.map(e => e.employeeName).join(', ')} | Remaining Budget: ${this.productionBudget}`;

        return result;
    }

    _departmentBudget(department, newBudget) {
        if(newBudget === null || newBudget === undefined) {
            switch(department) {
                case 'marketing':
                return this.marketingBudget;
                case 'finance':
                return this.financeBudget;
                case 'production':
                return this.productionBudget;
            }
        } else {
            switch(department) {
                case 'marketing':
                this.marketingBudget = newBudget;
                break;
                case 'finance':
                this.financeBudget = newBudget;
                break;
                case 'production':
                this.productionBudget = newBudget;
                break;
            }
        }
    };
}

module.exports = {
    Organization
};