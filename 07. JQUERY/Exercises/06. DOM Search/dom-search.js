function domSearch(selector, caseSensitive) {
    function onXButtonClick() {
        $(this).parent().remove();
    }

    function onAddButtonClick(ev) {
        const $inputElement = $(this).prev();
        const inputText = $inputElement.val();
        const $itemListElement = $('ul.items-list');

        if(!inputText) {
            return
        }
        
        $('<li>')
            .addClass('list-item')            
            .append($('<a>')
                .addClass('button')
                .text('X')
                .click(onXButtonClick))
            .append($('<strong>')
                .text(inputText))
            .appendTo($itemListElement)

        $inputElement.val('')
    }

    function onSearchChange() {
        const currentInput = $(this).val();
        $(`li.list-item`).css('display', 'none')

        if (caseSensitive) {
            $(`li.list-item:contains('${currentInput}')`).css('display', '');
        } else {
            $(`li.list-item`)
                .each((index, li) => {
                    const result = $(li).find('strong').text().toLowerCase().includes(currentInput.toLowerCase());

                    if(result) {
                        $(li).css('display', '')
                    }
                });
        }
    }

    $('<div>')
        .addClass('add-controls')
        .append($('<label>')
            .attr('for', 'add-item')
            .text('Enter text:'))
        .append($('<input>')
            .attr('id', 'add-item')
            .attr('type', 'text'))
        .append($('<a>')
            .addClass('button')
            .text('Add')
            .click(onAddButtonClick))
        .appendTo($(selector));

    $('<div>')
        .addClass('search-controls')
        .append($('<label>')
            .attr('for', 'search')
            .text('Search:'))
        .append($('<input>')
            .attr('id', 'search')
            .on('input', onSearchChange))
        .appendTo($(selector));

    $('<div>')
        .addClass('result-controls')
        .append($('<ul>')
            .addClass('items-list'))
        .appendTo($(selector));
}