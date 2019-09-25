function addDestination() {
    const $inputDataElements = $('.inputData');
    const cityInputElement = $inputDataElements[0];
    const countryInputElement = $inputDataElements[1];
    const $seasonElement = $('#seasons');

    const destinationListElement = $('#destinationsList');

    const city = cityInputElement.value;
    const country = countryInputElement.value;
    const season = $seasonElement.find('option:selected').text();

    if(city === '' || country === '') {
        return;
    }

    $('<tr>')
        .append($('<td>').text(`${city}, ${country}`))
        .append($('<td>').text(season))
        .appendTo(destinationListElement);

    const seasonCountElement = $(`#${season.toLowerCase()}`);
    seasonCountElement.val(Number(seasonCountElement.val()) + 1);

    cityInputElement.value = '';
    countryInputElement.value = '';
    $seasonElement.find('option').prop('selected', false);
    $seasonElement.find('option[value=summer]').prop('selected', true);
}