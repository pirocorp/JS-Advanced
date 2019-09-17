class Person {
    /**
     * 
     * @param {String} name 
     * @param {Number} age 
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    _getDomRepresentation() {
        return $(`<div class="person ${this.name}"></div>`)
            .append($('<p>').addClass('name').text(this.name))
            .append($('<p>').addClass('age').text(this.age))
            .append($(`<div class="posts ${this.name}">`));
    }

    addToSelector(selector) {
        const elements = $(selector)
            .each((index, element) =>{
                $(element).append(this._getDomRepresentation())
            });
    }
}

module.exports = Person;