function toggle() {
    const buttonElement = document.querySelector('#accordion span.button');
    const extraElement = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        extraElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        extraElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}