/**
 * 
 * @param {Map} map 
 * @param {function} sortFn
 */
function mapSort(map, sortFn) {
    const result = new Map();

    const kvpArr = Array.from(map);
    
    if(sortFn) {
        kvpArr.sort((a, b) => sortFn(a, b))
    } else {
        kvpArr.sort();
    }

    kvpArr.forEach(x => result.set(x[0], x[1]));

    return result
}

module.exports = mapSort;