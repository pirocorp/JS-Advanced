//Attaching events on certain elements
//on is like addEventHandler('click', buttonClicked);
$('a.button').on('click', buttonClicked);

function buttonClicked() {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    // "this" is the event source (the hyperlink clicked)
}

//Removing event handler from certain elements
$('a.button').off('click', buttonClicked);

//Handling events on multiple elements
//Add a handler on the parent element
function onListItemClick() {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
}

$('ul').on('click', 'li', onListItemClick);
