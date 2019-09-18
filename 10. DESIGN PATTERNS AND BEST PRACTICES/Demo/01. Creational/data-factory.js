//Factory Model pattern
class DataFactory {
    createData() {
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

        return data.getInstance();
    }
}