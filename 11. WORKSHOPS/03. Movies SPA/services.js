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

        console.log(response);
    }
 }