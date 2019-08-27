function addItem() {
    const inputElement = document.getElementById('newText');
    const itemsElement = document.getElementById('items');

    function deleteItem() {
        itemsElement.removeChild(this.parentNode);
    }

    function createElement(tagElement, text, attr, elistener) {
        const element = document.createElement(tagElement);
        element.textContent = text;

        if(attr) {
            element.setAttribute(attr.name, attr.value);
        }

        if(elistener) {
            element.addEventListener(elistener.type, elistener.func);
        }

        return element;
    }

    function appendChilds(parent, childs) {
        childs.forEach(child => parent.appendChild(child));
    }

    const inputValue = inputElement.value;

    if (!inputValue) {
        return;
    }

    const newLi = createElement('li', inputValue + ' ');

    const aElementAttribute = { name: 'href', value: '#' };
    const aElementEventListener = { type: 'click', func: deleteItem };
    const deleteLink = createElement('a', '[Delete]', aElementAttribute, aElementEventListener);
    
    appendChilds(newLi, [deleteLink]);
    appendChilds(itemsElement, [newLi]);

    inputElement.value = '';    
}