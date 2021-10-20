function create(words) {
    const contentElement = document.getElementById('content');

    const handler = (event) => {
        const p = event.currentTarget.getElementsByTagName('p')[0];
        p.style.display = 'block';
    }

    words.forEach(word => {
        const element = document.createElement('div');
        const pElement = document.createElement('p');
        pElement.textContent = word;
        pElement.style.display = 'none';
        element.appendChild(pElement);
        element.addEventListener('click', handler);

        contentElement.appendChild(element);
    });
}