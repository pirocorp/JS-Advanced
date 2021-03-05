function navigateHandler(e) {
    e.preventDefault();        

    if(!e.target.classList.contains('nav-link') && !e.target.classList.contains('navbar-brand')){
        return;
    }

    let url = new URL(e.target.href);
    navigate(url.pathname.slice(1));
};

async function onLoginSubmit(e) {
    e.preventDefault();  

    let formData = new FormData(document.forms['login-form']);

    let email = formData.get('email');
    let password = formData.get('password');

    
    await authService.login(email, password);
    navigate('home');
}

/* Entry point IIFE */
(() => {
    let navigationTemplate = Handlebars.compile(document.getElementById('navigation-template').innerHTML);
    Handlebars.registerPartial('navigation-template', navigationTemplate);

    navigate('home');     
})()

