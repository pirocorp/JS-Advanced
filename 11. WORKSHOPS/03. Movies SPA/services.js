 const apiKey = 'AIzaSyAkxot271oxm6mO2YZLrACbP7kzUw4rT1Q'
 
 const authService = {
    async login(email, password) {
        let response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                /* returnSecureToken: true */
            }),
        }); 
        
        if(!response.ok) {
            return;
        }

        let data = await response.json();
        localStorage.setItem('auth', JSON.stringify(data));

        return data;
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