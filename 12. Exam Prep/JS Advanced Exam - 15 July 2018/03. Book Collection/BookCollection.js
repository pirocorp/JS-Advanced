class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    };

    get room() {
        return this._room;
    };

    set room(value) {
        switch(value) {
            case 'livingRoom':
            case 'bedRoom':
            case 'closet':
                this._room = value
                break;
            default:
                throw `Cannot have book shelf in ${value}`
        }
    };

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre) {
        const book = {
            bookName,
            bookAuthor,
            genre
        };

        if(this.shelfCondition <= 0) {
            this.shelf.shift();
        }

        this.shelf.push(book);
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));

        /* Used for chaining -> test 14 */
        return this;
    };

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(x => x.bookName !== bookName);
    }

    showBooks(genre) {
        let result = `Results for search "${genre}":\n`;

        result += this.shelf
            .filter(x => x.genre === genre)
            .map(x => `\uD83D\uDCD6 ${x.bookAuthor} - "${x.bookName}"`)
            .join('\n');

        return result; 
    }

    toString() {
        if (this.shelf.length <= 0) {
            return "It's an empty shelf";
        }

        let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
        result += this.shelf
            .map(x => `\uD83D\uDCD6 "${x.bookName}" - ${x.bookAuthor}`)
            .join('\n');

        return result;
    }
}