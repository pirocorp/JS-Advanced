const router = (path) => {
    const routes = {
        'home': 'home-template',
        'login': 'login-form-template',
        'register': 'register-form-template',
    };

    if(path === 'logout') {
        authService.logout();
        navigate('home');
        return;
    }

    let appElement = document.getElementById('app');
    let template = Handlebars.compile(document.getElementById(routes[path]).innerHTML);

    let authData = authService.getAuthData();

    appElement.innerHTML = template(authData);
};

const navigate = (path) => {
    history.pushState({}, '', path);

    router(path);
}