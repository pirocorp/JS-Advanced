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
        if(!budget || budget <= this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if(this.kids.hasOwnProperty(grade) && this.kids[grade].find(x => x.split('-')[0] === name)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        if(!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        this.kids[grade].push(`${name}-${budget}`);
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if(!this.kids.hasOwnProperty(grade)) {
            return `'We couldn't find ${name} in ${grade} grade.`;
        }

        const indexOfKid = this.kids[grade]
            .map(x => x.split('-')[0])
            .indexOf(name);

        if(indexOfKid < 0) {
            return `'We couldn't find ${name} in ${grade} grade.`;            
        }

        this.kids[grade].splice(indexOfKid, 1);
        return this.kids[grade];
    }

    get numberOfChildren() {
        return Object.keys(this.kids).map(x => this.kids[x].length).reduce((a, b) => a + b, 0);
    }

    toString() {
        const orderedGrades = Object.keys(this.kids).sort((a, b) => a.localeCompare(b));

        return orderedGrades;
    }
}

module.exports = {
    Vacation
}