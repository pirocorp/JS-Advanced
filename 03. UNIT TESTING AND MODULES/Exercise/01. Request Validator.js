function validateRequest(obj) {

    const validateMethod = (function validateMethod() {
        const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        
        return function (ob) {
            if(!validMethods.some(m => m === ob.method)) {
                throw new Error('Invalid request header: Invalid Method');
            }
        }
    })();

    function validateUri(ob) {
        if(!ob.uri) {
            throw new Error('Invalid request header: Invalid URI');
        }

        if(ob.uri === '*') {
            return;
        }

        if(ob.uri === '') {
            throw new Error('Invalid request header: Invalid URI');
        }

        const uriRegex = /^[A-Za-z0-9]+$|^(([A-Za-z0-9]*\.)+[A-Za-z0-9]+)$/mg;
        
        if(!uriRegex.test(ob.uri)) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    const validateVersion = (function() {
        const validVersions = [ 'HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0' ];

        return function(ob) {
            if (!validVersions.some(v => v === ob.version)) {
                throw new Error('Invalid request header: Invalid Version');
            }
        }
    })();

    function validateMessage(ob) {
        if(ob.message === undefined || ob.message === null) {
            throw new Error('Invalid request header: Invalid Message');
        }
        
        if (ob.message.includes('\\') ||
            ob.message.includes('<') ||
            ob.message.includes('>') ||
            ob.message.includes('&') ||
            ob.message.includes('\'') ||
            ob.message.includes('\"')) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }
    
    validateMethod(obj);
    validateUri(obj);
    validateVersion(obj);
    validateMessage(obj);     

    return obj;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
})
);