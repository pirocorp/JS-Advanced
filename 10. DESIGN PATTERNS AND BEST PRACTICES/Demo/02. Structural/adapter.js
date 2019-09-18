//some 3rd part api
const NEW_API = {
    getStatus() {

    }
}

//Adapter -> intelligent patch
class ApiAdapter {
    get(status) {
        return NEW_API.getStatus();
    }
}

//Code in codebase
class Data {
    constructor(api) {
        this.api = api;
    }

    load() {
        return this.api.get('success');
    }
}
