function solve(inputData) {
    const listProcessor = (function () {
        let list = [];

        return {
            add: (item) => list.push(item),
            remove: (item) => list = list.filter(e => e !== item),
            print: () => console.log(list.join(',')),
        }
    })();

    inputData.forEach(element => {
        const tokens = element.split(/\s+/g)
            .filter(t => t !== '');

        listProcessor[tokens[0]](tokens[1]);
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])