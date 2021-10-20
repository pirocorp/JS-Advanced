function solve(arr) {
    Number.prototype.round = function (p) {
        p = p || 10;
        return parseFloat(this.toFixed(p));
    };

    let towns = [];
    let properties = readRow(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let currentRowData = readRow(arr[i]);
        let currentTown = {};

        for (let i = 0; i < properties.length; i++) {
            let currentProperty = properties[i];
            let currentValue = currentRowData[i];

            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue).round(2);
            }

            currentTown[currentProperty] = currentValue;
        }

        towns.push(currentTown);
    }

    console.log(JSON.stringify(towns));

    function readRow(stringRow) {
        let result = stringRow
            .split('|')
            .filter(x => x !== '')
            .map(x => x.trim());

        return result;
    }
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);