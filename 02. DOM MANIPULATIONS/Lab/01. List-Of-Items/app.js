function addItem() {
    const inputElement = document.getElementById('newItemText');
    const inputValue = inputElement.value;

    if(!inputValue) {
        return;
    }

    const newLi = document.createElement('li');
    newLi.textContent = inputValue;

    const itemsElement = document.getElementById('items');
    itemsElement.appendChild(newLi);
    inputElement.value = '';
}