function solve() {
    let searchButtonElement = document.getElementById('searchBtn');
    searchButtonElement.addEventListener("click", onSearchButtonClick);

    function onSearchButtonClick(e) {
        let searchFieldElement = document.getElementById('searchField');
        let searchValue = searchFieldElement.value.toLocaleLowerCase();

        if (!searchValue) {
            return
        }

        let cells = Array.from(document.querySelectorAll('tbody td'));
        cells.forEach(x => x.parentElement.classList.remove('select'));

        let matchedCells = cells.filter(c => c.textContent.toLocaleLowerCase().includes(searchValue));

        matchedCells.forEach(x => x.parentElement.classList.add('select'));

        searchFieldElement.value = '';
    }
}