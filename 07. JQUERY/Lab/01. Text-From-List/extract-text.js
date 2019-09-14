function extractText() {
    let result = $('ul li')
        .toArray() //After
        .map(x => x.textContent)
        .join(', ');

    $('#result').text(result);
}
