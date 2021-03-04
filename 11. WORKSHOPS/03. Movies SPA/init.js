function addEventListeners() {
    document
    .getElementById('navigation')
    .addEventListener('click', navigateHandler);
};

function navigateHandler(e) {
    e.preventDefault();        

    if(!e.target.classList.contains('nav-link')){
        return;
    }

    let url = new URL(e.target.href);
    history.pushState({}, '', url.pathname);

    router(url.pathname.slice(1));
};

async function onLoginSubmit(e) {
    e.preventDefault();  

    let formData = new FormData(document.forms['login-form']);

    let email = formData.get('email');
    let password = formData.get('password');

    
    await authService.login(email, password);
}

addEventListeners();