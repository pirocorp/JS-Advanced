class Vacation {
    /**
     * 
     * @param {String} organizer 
     * @param {String} destination 
     * @param {Number} budget 
     */
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if(budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if(this.kids.hasOwnProperty(grade) && this.kids[grade].find(x => x.split('-')[0] === name)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        this.kids[grade].push(`${name}-${budget}`);
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade)) {
            return `We couldn't find ${name} in ${grade} grade.`
        }

        let index = -1;

        for (let students of this.kids[grade]) {
            let kidName = students.split("-")[0];
            index++;
            if (kidName === name) {
                this.kids[grade].splice(index, 1);
                return this.kids[grade];
            }
        }

        return `We couldn't find ${name} in ${grade} grade.`
    }

    get numberOfChildren() {
        return Object.keys(this.kids).map(x => this.kids[x].length).reduce((a, b) => a + b, 0);
    }

    toString() {
        if(this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        const orderedGrades = Object.keys(this.kids).sort((a, b) => a - b);
        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

        for (let i = 0; i < orderedGrades.length; i++) {
            const grade = orderedGrades[i];
            result += `Grade: ${grade}\n`

            for (let j = 0; j < this.kids[grade].length; j++) {
                const kid = this.kids[grade][j];
                result += `${j+1}. ${kid}\n`
            }
        }

        return result;
    }
}

module.exports = {
    Vacation
}