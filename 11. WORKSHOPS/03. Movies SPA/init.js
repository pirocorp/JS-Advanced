function navigateHandler(e) {
    e.preventDefault();        

    if(!e.target.classList.contains('nav-link') 
        && !e.target.classList.contains('navbar-brand')
        && !e.target.classList.contains('handler')) {
        return;
    }

    let url = {};

    try {
        url = new URL(e.target.href);
    } catch (error) {
        url = new URL((e.target.parentElement.href));
    }

    navigate(url.pathname.slice(1));
};

async function onLoginSubmit(e) {
    e.preventDefault();  

    let formData = new FormData(document.forms['login-form']);

    let email = formData.get('email');
    let password = formData.get('password');

    
    await authService.login(email, password);
    navigate('home');
};

async function onRegisterSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.forms['register-form']);

    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('repeatPassword');

    if(password !== repeatPassword){
        document.getElementById('register-password').value = '';
        document.getElementById('register-confirm-password').value = '';

        // TODO: Show error message
        return;
    }

    let result = await authService.register(email, password);
    
    if(result){
        navigate('home');
    }
}

async function onAddMovieSubmit(e) {
    e.preventDefault();
    let formData = new FormData(document.forms['add-movie-form']);

    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');
    let ownerId = JSON.parse(localStorage.getItem('auth')).localId;

    var data = await movieService.add({
        title,
        description,
        imageUrl,
        ownerId
    });

    navigate('home');
};

async function onEditMovieSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.forms['edit-movie-form']);

    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');

    let movieId = document.getElementById('movieId').value;
    
    let data = await movieService.editMovieDetails(movieId, {
        title,
        description,
        imageUrl
    });

    navigate('home');
}

async function onSearchMovieSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.forms['search-form']);

    let search = formData.get('search');
    navigate(`search/${search}`);
}

/* Entry point IIFE */
(() => {
    let navigationTemplate = Handlebars.compile(document.getElementById('navigation-template').innerHTML);
    Handlebars.registerPartial('navigation-template', navigationTemplate);

    let movieCardTemplate = Handlebars.compile(document.getElementById('movie-card-template').innerHTML);
    Handlebars.registerPartial('movie-card-template', movieCardTemplate);

    navigate(location.pathname.slice(1) || 'home');     
})()

