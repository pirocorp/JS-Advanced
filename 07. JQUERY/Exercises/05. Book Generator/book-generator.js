function createBook(selector, title, author, ISBN) {
    const bookIdGenerator = (function() {
        let index = 1;
        
        return function() {
            return `book${index++}`;
        }
    })();

    function onSelectButtonClick() {
        console.log('Select');
    }

    function onDeselectButtonClick() {
        console.log('Deselect');
    }

    const div = $('<div>')
        .attr('id', bookIdGenerator())
        .css('border', 'medium none')
        .append($(`<p class="title">${title}</p>`))
        .append($(`<p class="author">${author}</p>`))
        .append($(`<p class="isbn">${ISBN}</p>`))
        .append($('<button>Select</button>')
            .click(() => div.css('border', '2px solid blue')))
        .append($('<button>Deselect</button>')
            .click(() => div.css('border', '')))
        .appendTo($(selector));
}