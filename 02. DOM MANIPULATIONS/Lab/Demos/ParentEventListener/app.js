const deleteListItem = (ev) => {
    const liElement = ev.target;

    if(liElement.tagName !== 'LI') {
        // console.log(liElement.tagName);
        return;
    }

    liElement.remove();
    /* liElement.parentNode.removeChild(liElement); */
}

window.onload = () => {
    document.getElementById('list')
        .addEventListener('click', deleteListItem);
}