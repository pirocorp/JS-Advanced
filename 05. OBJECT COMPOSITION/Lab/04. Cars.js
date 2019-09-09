function solve(commands) {
    const objProcessor = (function() {
        const objects = {};

        return {
            create: (name, param, inherit) => {
                if (inherit){
                    objects[name] = Object.create(objects[inherit]);
                } else {
                    objects[name] = {};
                }
            },
            
            set: (name, key, value) => {
                objects[name][key] = value;
            },

            print: (name) => {
                const current = objects[name];
                const props = [];

                //for in loop iterate over all inherit and own properties if they are enumerable
                for (const p in current) {
                    props.push(`${p}:${current[p]}`)
                }

                console.log(props.join(', '));
            }
        }
    })();

    for (const cmd of commands) {
        let [command, name, param, value] = cmd.split(' ');
        objProcessor[command](name, param, value);
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);