const data = require('./data');

function sort(property) {
    return data.sort((a, b) => a[property].localeCompare(b[property]));
}

function filter(property, value) {
    return data.filter(x => x[property] === value);
}

result.sort = sort;
result.filter = filter

/* let sortResult = sort('shipTo');

console.log(sortResult); */