function attachEvents() {
    //element.addEventListener('click', buttonClicked);
    $('a.button').on('click', buttonClicked);

    function buttonClicked() {
        //remove all selected classes
        $('.selected').removeClass('selected');
        //"this" is the event source (the hyperlink clicked)
        $(this).addClass('selected');
    }
}
