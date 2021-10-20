function search() {
    const resultElement = document.getElementById('result');
    const searchTextElement = document.getElementById('searchText');

    const searchTerm = searchTextElement.value;

    const townElements = Array.from(document.getElementById('towns').children);

    const results = townElements.filter(t => t.textContent.indexOf(searchTerm) >= 0);

    results.forEach(e => {
        e.style.textDecoration = "underline";
        e.style.fontWeight = 'bold';
    });

    resultElement.textContent = `${results.length} matches found`;
}
