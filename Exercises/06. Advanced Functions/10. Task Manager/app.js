function solve() {
    const sections = document.getElementsByTagName('section');
    const addButtonElement = document.getElementById('add');
    const openSection = sections[1];
    const inProgressElement = document.getElementById('in-progress');
    const mainElement = document.getElementsByTagName('main')[0];

    const onAddButtonClickHandler = function(event) {
        event.preventDefault();
        
        const taskElement = document.getElementById('task');
        const descriptionElement = document.getElementById('description');
        const dateElement = document.getElementById('date');

        const task = taskElement.value;
        const description = descriptionElement.value;
        const date = dateElement.value;

        createArticle(task, description, date);

        taskElement.value = '';
        descriptionElement.value = '';
        dateElement.value = '';
    };

    addButtonElement.addEventListener('click', onAddButtonClickHandler);

    const onStartButtonClickHandler = function (event) {
        if (event.target.tagName !== 'BUTTON'
            || event.target.textContent !== 'Start') {
            return;
        }

        const article = event.target.parentElement.parentElement;
        const buttonsElement = article.querySelector('div');
        createInProgressArticleButtons(buttonsElement);
        
        inProgressElement.appendChild(article);
    }

    openSection.addEventListener('click', onStartButtonClickHandler);

    const onFinishButtonClickHandler = function(event) {
        if (event.target.tagName !== 'BUTTON'
            || event.target.textContent !== 'Finish') {
            return;
        }

        const article = event.target.parentElement.parentElement;
        const buttonsElement = article.querySelector('div');
        article.removeChild(buttonsElement);

        const completeElement = sections[3].querySelectorAll('div')[1];
        completeElement.appendChild(article);
    }

    inProgressElement.addEventListener('click', onFinishButtonClickHandler);

    const onDeleteButtonClickHandler = function(event) {
        if (event.target.tagName !== 'BUTTON'
            || event.target.textContent !== 'Delete') {
            return;
        }

        const article = event.target.parentElement.parentElement;
        
        article.parentElement.removeChild(article);
    };

    mainElement.addEventListener('click', onDeleteButtonClickHandler);

    function createInProgressArticleButtons(element) {
        element.innerHTML = '';

        const endBtn = document.createElement('button');
        endBtn.classList.add('red');
        endBtn.textContent = 'Delete';
        element.appendChild(endBtn);

        const finishBtn = document.createElement('button');
        finishBtn.classList.add('orange');
        finishBtn.textContent = 'Finish';
        element.appendChild(finishBtn);
    }

    function createOpenArticleButtons(element) {
        element.innerHTML = '';
        
        const startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        element.appendChild(startBtn);

        const endBtn = document.createElement('button');
        endBtn.classList.add('red');
        endBtn.textContent = 'Delete';
        element.appendChild(endBtn);        
    }

    function createArticle(task, description, date) {
        const openElement = openSection.querySelectorAll('div')[1];

        const article = document.createElement('article');

        const taskName = document.createElement('h3');
        taskName.textContent = task;
        article.appendChild(taskName);

        const descriptionContent = document.createElement('p');
        descriptionContent.textContent = `Description: ${description}`;
        article.appendChild(descriptionContent);

        const deadline = document.createElement('p');
        deadline.textContent = `Due Date: ${date}`;
        article.appendChild(deadline);

        const flex = document.createElement('div');
        flex.classList.add('flex');

        createOpenArticleButtons(flex);

        article.appendChild(flex);

        openElement.appendChild(article);
    };
}