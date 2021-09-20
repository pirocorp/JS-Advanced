function solve() {
    const onScreenButtonElement = document.querySelector('#container button');
    const moviesElement = document.querySelector('#movies ul');
    const archiveElement = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');

    const onScreenButtonClickHandler = function(event) {
        event.preventDefault();
        
        const movieData = getMovieDataFromInput();

        if(movieData === null) {
            return;
        }

        moviesElement.appendChild(createMovieElement(movieData))
    }

    onScreenButtonElement.addEventListener('click', onScreenButtonClickHandler);

    const onArchiveButtonClickHandler = function (event) {       
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        
        const element = event.target.parentElement.parentElement;

        const name = element.querySelector('span').textContent;
        const amountElement = element.querySelector('div input');
        const priceElement = element.querySelector('div strong');

        if (amountElement.value === '') {
            return;
        }

        const amount = Number(amountElement.value);
        const price = Number(priceElement.textContent);

        if(isNaN(price) || isNaN(amount)) {
            return;
        }

        amountElement.value = '';
        createArchive(name, amount, price);
    }

    moviesElement.addEventListener('click', onArchiveButtonClickHandler);

    const onDeleteButtonClickHandler = function (event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        const element = event.target.parentElement;
    
        element.parentNode.removeChild(element);
    };

    archiveElement.addEventListener('click', onDeleteButtonClickHandler);

    const onClearButtonClickHandler = function (event) {
        const element = event.target.parentElement;
        const archive = element.querySelector('ul');
        
        archive.innerHTML = '';
    };

    clearButton.addEventListener('click', onClearButtonClickHandler);

    function getMovieDataFromInput() {
        const inputs = Array.from(document.querySelectorAll('#container input'));

        if (inputs.some(i => i.value === '')) {
            return null;
        }

        const name = inputs[0].value;
        const hall = inputs[1].value;
        const price = Number(inputs[2].value);

        if (isNaN(price)) {
            return null;
        }

        clearInputs(inputs);

        return {
            name,
            hall,
            price
        };
    }

    function clearInputs(arr) {
        arr.forEach(e => e.value = '');
    }

    function createMovieElement(movie) {
        const element = document.createElement('li');

        const movieName = document.createElement('span');
        movieName.textContent = movie.name;
        element.appendChild(movieName);

        const hall = document.createElement('strong');
        hall.textContent = `Hall: ${movie.hall}`;
        element.appendChild(hall);

        const archiveElement = document.createElement('div');

        const price = document.createElement('strong');
        price.textContent = movie.price.toFixed(2);
        archiveElement.appendChild(price);

        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');
        archiveElement.appendChild(input);

        const button = document.createElement('button');
        button.textContent = 'Archive';
        archiveElement.appendChild(button);

        element.appendChild(archiveElement);

        return element;
    }

    function createArchive(name, amount, price) {
        const archive = document.createElement('li');

        const movieName = document.createElement('span');
        movieName.textContent = name;
        archive.appendChild(movieName);

        const totalElement = document.createElement('strong');
        const total = amount * price;
        totalElement.textContent = `Total amount: ${total.toFixed(2)}`;
        archive.appendChild(totalElement);

        const deleteElement = document.createElement('button');
        deleteElement.textContent = 'Delete';
        archive.appendChild(deleteElement);

        const archiveElement = document.querySelector('#archive ul');
        archiveElement.appendChild(archive);
    }
}