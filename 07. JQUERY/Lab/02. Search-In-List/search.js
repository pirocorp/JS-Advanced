function search() {
    const input = $('#searchText').val();

    if(input) {
        //reset font-weight on all li's in towns
        $("#towns li").css('font-weight', '');

        //:contains selector check if li contains input
        const matchedElements = $(`#towns li:contains('${input}')`);

        //sets font-weight bold on all elements containing input
        matchedElements.css('font-weight', 'bold');

        //in result elements set textContent to number of matches
        $('#result').text(matchedElements.length + ' matches found.');
    }
}