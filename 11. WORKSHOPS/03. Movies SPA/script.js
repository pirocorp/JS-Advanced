const router = (path) => {
    const routes = {
        'login': 'login-form-template',
        'register': 'register-form-template',
    };

    let appElement = document.getElementById('app');
    let template = Handlebars.compile(document.getElementById(routes[path]).innerHTML);

    appElement.innerHTML = template();
};

