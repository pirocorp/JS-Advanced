const router = async (fullPath) => {
    const routes = {
        'home': 'home-template',
        'login': 'login-form-template',
        'register': 'register-form-template',
        'add-movie': 'add-movie-template',
        'details': 'movie-details-template',
    };

    let [path, id] = fullPath.split('/');

    if(path === 'logout') {
        authService.logout();
        navigate('home');
        return;
    }

    let templateId = routes[path];
    let template = Handlebars.compile(document.getElementById(templateId).innerHTML);    

    let templateData = authService.getAuthData();

    switch(path){
        case "home":
            templateData.movies = await movieService.getAll();
            break;
        case "details":
            let movieDetails = await movieService.getMovieDetails(id);
            Object.assign(templateData, movieDetails);
            break;
    }

    let appElement = document.getElementById('app');
    appElement.innerHTML = template(templateData);
};

const navigate = (fullPath) => {
    let [path, id] = fullPath.split('/');

    history.pushState({}, '', path);

    router(fullPath);
}