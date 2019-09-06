const CheckingAccount = (function() {
    class CheckingAccount {
    constructor(clientId, email, firstName, lastName ) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    _validateName(value, name) {
        if(value.length < 3 || value > 20) {
            throw new TypeError(`${name} name must be between 3 and 20 characters long`);
        }

        if(!this.nameRegex.test(value)) {
            console.log(value);
            throw new TypeError(`${name} name must contain only Latin characters`);
        }
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        const number = Number(value)

        if(number === NaN || value.length !== 6) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = Number(number);
    }

    get email() {
        return this._email;
    }

    set email(value) {        
        if (!this.emailRegex.test(value)) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._validateName(value, 'First')
        this._firstName = value;
    }  
    
    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._validateName(value, 'Last')
        this._lastName = value;
    }
}

CheckingAccount.prototype.emailRegex = /^[A-Za-z0-9]+@[a-zA-z\.]+$/;
CheckingAccount.prototype.nameRegex = /^[A-Za-z]+$/;
return CheckingAccount;
})();

let acc = new CheckingAccount('131456', 'ivan@some.com', 'Ivan', 'Petrov');
console.log(acc);
//acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
//acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
//acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');