function attachEvents() {
    $('#items').on('click', 'li', onListItemClick);
    
    function onListItemClick() {
        let li = $(this); //convert this to jQuery Element

        //returns the value of attributte if it exists
        if(li.attr('data-selected')) {
            //remove given attributte
            li.removeAttr('data-selected');
            li.css('background', '')
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD')
        }
    }

    $('#showTownsButton').on('click', onShowTownsButtonClick);

    function onShowTownsButtonClick() {
        const towns = $('#items [data-selected="true"]')
            .toArray()
            .map(x => x.textContent)
            .join(', ');

        $('#selectedTowns').text(towns);
    }
}