class Contact {
    #online = false;

    constructor(firstName, lastName, phone, email) {
        this.contactForm = this.createForm(firstName, lastName, phone, email);
    }

    /**
     * @param {boolean} value
     */
    set online(value) {
        this.#online = value;

        const element = this.contactForm.querySelectorAll('div')[0];
        const className = 'online'
        
        if(this.online) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }

    get online() {
        return this.#online;
    }

    createForm(firstName, lastName, phone, email) {
        const article = document.createElement('article');

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = `${firstName} ${lastName}`;

        const titleButtonClickHandler = function (event) {
            const element = event.target.parentNode.parentNode.querySelectorAll('div')[1];
            
            if (element.style.display === 'none'){
                element.style.display = 'initial';
            } else {
                element.style.display = 'none'
            }
        }

        const titleButton = document.createElement('button');
        titleButton.textContent = 'ℹ'
        titleButton.addEventListener('click', titleButtonClickHandler);

        title.appendChild(titleButton);

        article.appendChild(title);

        const info = document.createElement('div');
        info.style.display = 'none';
        info.classList.add('info');

        const phoneElement = document.createElement('span');
        phoneElement.textContent = `☎ ${phone}`;

        const emailElement = document.createElement('span');
        emailElement.textContent = `✉ ${email}`;

        info.appendChild(phoneElement);
        info.appendChild(emailElement);

        article.appendChild(info);

        return article;
    }

    render(id) {
        const container = document.getElementById(id);

        container.appendChild(this.contactForm);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];

contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
setTimeout(() => contacts[2].online = true, 1000);
setTimeout(() => contacts[2].online = false, 3000);
