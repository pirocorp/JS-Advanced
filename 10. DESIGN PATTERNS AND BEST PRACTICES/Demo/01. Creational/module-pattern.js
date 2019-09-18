//Module pattern -> JS 
const data = (function () {
    class Data {
        //behavior
    }

    let instance = null;

    const getInstance = () => {
        instance = instance || new Data();
        return instance;
    };

    return {
        getInstance
    }
})();