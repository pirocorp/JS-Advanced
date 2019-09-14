function initializeTable() {
    function tableInit() {
        $('#createLink').click(createCountry)

        addCountryToTable('Bulgaria', 'Sofia');
        addCountryToTable('Germany', 'Berlin');
        addCountryToTable('Russia', 'Moscow');

        fixRowLinks();
    }

    function createCountry() {
        //$ before variable means inside is jQuery element not DOM Element
        const $countryInputElement = $('#newCountryText');
        const $capitalInputElement = $('#newCapitalText');

        const country = $countryInputElement.val();
        const capital = $capitalInputElement.val();

        if (!country || !capital) {
            return;
        }

        addCountryToTable(country, capital);
        $countryInputElement.val('');
        $capitalInputElement.val('');
        fixRowLinks();
    };

    function addCountryToTable(country, capital) {
        let row = $('<tr>') //creates new element tr like document.createElement('tr');
            .append($('<td>').text(country)) // append element to the end of each element
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($("<a href='#'>[Up]</a>")
                    .on('click', moveRowUp))
                .append($("<a href='#'>[Down]</a>")
                    .on('click', moveRowDown))
                .append($("<a href='#'>[Delete]</a>")
                    .on('click', deleteRow))
            );

        row.css('display', 'none'); //row by default is hidden with css
        $('#countriesTable').append(row); //append new row to the table
        row.fadeIn(); //Show row with animation
    };

    function moveRowUp() {
        const currentRow = $(this) //$(this) convert this into jQuery Element
            .parent() //jQuery returns parent of current element
            .parent();

        //we hide row with animation and after function is done calls callback
        //wich receive as parameter
        currentRow.fadeOut(function () {
            //move current row before its sibling
            currentRow.insertBefore(currentRow.prev());
            fixRowLinks(); //Removing on first country Up link and on the last Last
            //Showing row on its new position with animation
            currentRow.fadeIn();
        });
    };

    function moveRowDown() {
        const currentRow = $(this) //$(this) convert this into jQuery Element
            .parent() //jQuery returns parent of current element
            .parent();


        currentRow.fadeOut(function () {
            currentRow.insertAfter(currentRow.next());
            fixRowLinks();
            currentRow.fadeIn();
        });
    };

    function deleteRow() {
        const currentRow = $(this) //$(this) convert this into jQuery Element
            .parent() //jQuery returns parent of current element
            .parent();

        //Hides row before deletion
        //After fadeOut function is done callback is called
        //fadeOut recive as parameter callback function
        currentRow.fadeOut(function () {
            currentRow.remove(); //Row is removed
            fixRowLinks();
        });
    };

    function fixRowLinks() {
        // Show all links in the table
        $('#countriesTable a').css('display', 'inline');  //inline is used for judge only

        // Hide [Up] link in first table data row
        let tableRows = $('#countriesTable tr');
        $(tableRows[2])
            .find("a:contains('Up')") //:contains check if a contains 'Up'
            .css('display', 'none'); //hides first country row with css

        // Hide the [Down] link in the last table row
        $(tableRows[tableRows.length - 1])
            .find("a:contains('Down')") //:contains check if a contains 'Down'
            .css('display', 'none'); //hides last country row with css
    }

    tableInit();
};