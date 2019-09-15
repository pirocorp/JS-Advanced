function increment(selector) {
    const rootElement = $(selector);
    
    rootElement
        .append($('<textarea>') //create element textarea and appends it to the root element
            .addClass('counter') //add class counter to textarea element
            .val(0) //set value of text area to 0
            .attr('disabled', true)) //add atribute disabled
        .append($('<button>') //creates element and append it
            .addClass('btn') 
            .attr('id', 'incrementBtn') //add attribute and set value of attribute
            .text('Increment') //set text of element
            .click(onIncrementButtonClick)) //add event handler on click event of the button
        .append($('<button>') //creates element and append it
            .addClass('btn')
            .attr('id', 'addBtn') //add attribute and set value of attribute
            .text('Add') //set text of element
            .click(onAddButtonClick)) //add event handler on click event of the button add
        .append($('<ul>') //creates element and append it
            .addClass('results'));

    function onIncrementButtonClick() {
        const $textAreaElement = $('textarea.counter');
        $textAreaElement.val(Number($textAreaElement.val()) + 1);
    }
    
    function onAddButtonClick() {
        const $resultElement = $('ul.results');
        const textAreaValue = $('textarea.counter').val();
        $resultElement.append($('<li>').text(textAreaValue));
    }
}
