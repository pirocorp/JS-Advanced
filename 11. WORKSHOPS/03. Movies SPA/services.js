 const apiKey = 'AIzaSyAkxot271oxm6mO2YZLrACbP7kzUw4rT1Q';
 const databaseUrl = `https://movies-7f29d-default-rtdb.firebaseio.com`;
 const moviesEndpoint = `${databaseUrl}/movies.json`;

const request = async (url, method, payload) => {
    let options = {
        method,
    };

    if(payload) {
        Object.assign(options, {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    }

    let response = await fetch(url, options);

    let data = await response.json();
    return data;
};
 
const authService = {
    async login(email, password) {
        let payload = {
            email,
            password,
            /* returnSecureToken: true */
        };

        let response = await request(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, 'POST', payload);
       
        console.log(response);

        if(response.error) {
            return;
        }

        localStorage.setItem('auth', JSON.stringify(response));
        return response;
    },

    async register(email, password){
        let payload = {
            email,
            password,
            /* returnSecureToken: true */
        };

        let response = await request(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, 'POST', payload)

        if(response.error) {
            return;
        }

        localStorage.setItem('auth', JSON.stringify(response));
        return response;
    },

    getAuthData() {        
        try {
            let data = JSON.parse(localStorage.getItem('auth'));

            return {
                isAuthenticated: Boolean(data.idToken),
                email: data.email || ''
            };
        } catch (error) {
            return {
                isAuthenticated: false,
                email: ''
            };
        }        
    },

    logout() {
        localStorage.setItem('auth', '');
    }
};

const movieService = (() => {
    function validateOwnership(movieOwnerId) {
        let currentUserId = JSON.parse(localStorage.getItem('auth')).localId;
    
        return movieOwnerId === currentUserId;
    };

    return {
        async add(moveData) {        
            let data = await request(moviesEndpoint, 'POST', moveData);
    
            return data;
        },
        async getAll() {
            let data = await request(moviesEndpoint, 'GET');
    
            /* ({ key, ...data[key]})  // Object.assign(data[key], key) */
            data = Object.keys(data).map(key => ({key, ...data[key]})); 
    
            return data;
        },
        async getMovieDetails(id) {
            let data = await request(`${databaseUrl}/movies/${id}.json`, 'GET');
    
            data.ownerId = validateOwnership(data.ownerId);
            data.key = id;

            return data;
        },
        async editMovieDetails(id, payload){
            let data = await request(`${databaseUrl}/movies/${id}.json`, 'PATCH', payload);
            return data;
        }
    }
})();
