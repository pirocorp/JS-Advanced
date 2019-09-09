function processCommands(commands) {
    let processor = (function() {
        let objects = new Map();

        function create(name, param, parent) {
            if(param) {
                inherit(name, parent);
            } else {
                objects.set(name, {});
            }
        }

        function inherit(name, parent) {
            objects.set(name, Object.create(objects.get(parent)));
        }

        function set(objName, propName, value) {
            objects.get(objName)[propName] = value;
        }

        function print(name) {
            let current = objects.get(name);
            let props = [];

            for (const p in current) {
                props.push(`${p}:${current[p]}`)
            }

            console.log(props.join(' '));
        }

        return {
            create,
            inherit,
            set,
            print
        }
    })();

    for (const cmd of commands) {
        let [command, name, param, value] = cmd.split(' ');
        processor[command](name, param, value);
    }
}

processCommands(['create c1', 'set c1 model red', 'create c2 inherit c1', 'set c2 make BMW','print c1', 'print c2']);