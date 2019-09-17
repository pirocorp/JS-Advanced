class Branch {
    /**
     * 
     * @param {Number} id 
     * @param {String} branchName 
     * @param {String} companyName 
     */
    constructor(id, branchName, companyName) {
        this._id = id;
        this._branchName = branchName;
        this._companyName = companyName;

        this._employees = [];
    }

    get employees() {
        return this._employees;
    }

    hire(employee) {
        this._employees.push(employee);
    }

    toString() {
        const result = `@ ${this._companyName}, ${this._branchName}, ${this._id}\nEmployed:\n`;
        
        if(this.employees.length === 0) {
            return result + 'None...'
        }

        return result + this.employees
            .map(x => `** ${x.toString()}`)
            .join('\n');
    }
}

module.exports = Branch;