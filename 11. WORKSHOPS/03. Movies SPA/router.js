const router = async (fullPath) => {
    const routes = {
        'home': 'home-template',
        'login': 'login-form-template',
        'register': 'register-form-template',
        'add-movie': 'add-movie-template',
        'details': 'movie-details-template',
        'edit': 'edit-movie-template',
    };

    let [path, id] = fullPath.split('/');

    if(path === 'logout') {
        authService.logout();
        navigate('home');
        return;
    }

    let templateData = authService.getAuthData();
    let movieDetails = {};

    switch(path){
        case "home":
            templateData.movies = await movieService.getAll();
            break;
        case "details":
            movieDetails = await movieService.getMovieDetails(id);
            Object.assign(templateData, movieDetails);
            break;
        case "edit":
            movieDetails = await movieService.getMovieDetails(id);
            Object.assign(templateData, movieDetails);
            break;
        case "delete":
            await movieService.deleteMovie(id);
            navigate('home');
            return;
        case "like":
            await movieService.like(id);
            navigate(`details/${id}`);
            return;
    }

    let templateId = routes[path];
    let template = Handlebars.compile(document.getElementById(templateId).innerHTML);   

    let appElement = document.getElementById('app');
    appElement.innerHTML = template(templateData);
};

const navigate = (fullPath) => {
    let [path, id] = fullPath.split('/');

    history.pushState({}, '', path);

    router(fullPath);
}