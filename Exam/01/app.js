window.addEventListener('load', solve);

function solve() {
    const allHits = document.querySelector('#all-hits > div');
    const savedHits = document.querySelector('#saved-hits > div');
    const totalLikes = document.querySelector('#total-likes p');

    const fields = Array.from(document.querySelectorAll('form input'));

    const input = {
        genre: fields[0],
        name: fields[1],
        author: fields[2],
        date: fields[3]
    };

    const addButtonElement = document.getElementById('add-btn');
    addButtonElement.addEventListener('click', onClickAddButtonHandler);
    
    function onClickAddButtonHandler(e) {
        e.preventDefault();

        if(fields.some(x => x.value.trim() === '')) {
            return
        }

        const saveBtn = createDOMElement('button', {classList: 'save-btn'}, 'Save song');
        const likeBtn = createDOMElement('button', {classList: 'like-btn'}, 'Like song');
        const deleteBtn = createDOMElement('button', {classList: 'delete-btn'}, 'Delete');

        const song = createDOMElement(
            'div', 
            {
                classList: 'hits-info'
            },
            createDOMElement('img', {src: './static/img/img.png'}),
            createDOMElement('h2', {}, `Genre: ${input.genre.value}`),
            createDOMElement('h2', {}, `Name: ${input.name.value}`),
            createDOMElement('h2', {}, `Author: ${input.author.value}`),
            createDOMElement('h3', {}, `Date: ${input.date.value}`),
            saveBtn,
            likeBtn,
            deleteBtn
        );

        likeBtn.addEventListener('click', onClickLikeButtonHandler.bind(likeBtn));            
        saveBtn.addEventListener('click', onClickSaveButtonHandler.bind(null, song));
        deleteBtn.addEventListener('click', onClickDeleteButtonHandler.bind(null, song));

        allHits.appendChild(song);

        fields.forEach(f => f.value = '');
    };

    function onClickSaveButtonHandler(song) {
        const buttons = song.querySelectorAll('button');
        buttons[0].remove();
        buttons[1].remove();

        savedHits.appendChild(song);
    }

    function onClickLikeButtonHandler() {
        let currentLikes = totalLikes.textContent
            .split(':')
            .map(x => x.trim())[1];

        currentLikes = Number(currentLikes)
        console.log();

        totalLikes.textContent = `Total Likes: ${currentLikes + 1}`;
        this.setAttribute("disabled", "disabled");
    }

    function onClickDeleteButtonHandler(song) {
        song.remove();
    }

    // Creates elements (type, attributes, ...elements)
    function createDOMElement(type, attr, ...content) {
        const element = document.createElement(type);       
    
        // Adds element attributes
        Object.assign(element, attr);
    
        /* for (const prop in attr) {
            element[prop] = attr[prop];
        } */
    
        for (let item of content) {
            if(typeof(item) === 'string' 
            || typeof(item) === 'number') {
                item = document.createTextNode(item);
            }
    
            element.appendChild(item);
        }
    
        return element;
    };
}