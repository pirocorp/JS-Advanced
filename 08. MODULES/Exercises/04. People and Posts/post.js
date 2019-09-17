class Post {
    /**
     * 
     * @param {String} title 
     * @param {String} body 
     * @param {String} author 
     */
    constructor(title, body, author) {
        this.title = title;
        this.body = body;
        this.author = author;
    }

    _getDomRepresentation() {
        return $(`<div class="post ${this.author}"></div>`)
            .append($('<h3>').addClass('title').text(this.title))
            .append($('<p>').addClass('body').text(this.body))
            .append($('<p>').addClass('author').text(this.author));
    }

    addToSelector(selector) {
        const elements = $(selector)
            .each((index, element) => {
                $(element).append(this._getDomRepresentation())
            });
    }
}

module.exports = Post;