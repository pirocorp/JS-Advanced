function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            const type = this.constructor.name;
            const props = Object.getOwnPropertyNames(this)
                .map(p => `${p}: ${this[p]}`)
                .join(', ');
            
            
            return `${type} (${props})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

const { Person, Teacher, Student } = toStringExtension();

const person = new Person('Piro', 'piro@abv.bg');
const teacher = new Teacher('Pesho', 'pp@abv.bg', 'JS');
const student = new Student('Asen', 'asen@abv.bg', 'PHP')
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());
