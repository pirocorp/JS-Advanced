function getListItemFactory() {
    const listItemTemplate = document.createElement('li');
    listItemTemplate.className = 'list-item';

    const aTemplate = document.createElement('a');
    aTemplate.href = '#';

    listItemTemplate.appendChild(aTemplate);
    
    return function (text) {
        aTemplate.textContent = text
        const currentListItem = listItemTemplate.cloneNode(true);

        return currentListItem;
    }
}

function app(){
    const createListItem = getListItemFactory();

    for (let i = 0; i < 50; i++) {
        const currentLi = createListItem(`Text${i+1}`);
        document.body.appendChild(currentLi);    
    }
}

window.onload = () => app();