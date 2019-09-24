const { Organization } = require('../Organization');
const { expect } = require('chai');

/* describe('03. Organization Tests', () => {

}); */


const org = new Organization('pirocorp', '10000');
const result = org.add('Pesho', 'finance', 500);
org.add('Gosho', 'finance', 500);
org.add('Asen', 'finance', 500);
org.add('Hristo', 'finance', 500);
const result2 = org.add('Mitko', 'finance', 1000);
console.log(result);
console.log(result2);
console.log(org.departmentsBudget);
console.log(org);

console.log('-'.repeat(80));
console.log(org.employeeExists('xx'));
console.log(org.employeeExists('Asen'));

console.log('-'.repeat(80));
console.log(org.leaveOrganization('xx'));
console.log(org.leaveOrganization('Asen'));
console.log(org);
console.log('-'.repeat(80));

console.log(org.status());
console.log(org);
