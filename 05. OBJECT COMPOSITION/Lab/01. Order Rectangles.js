function solve(data) {
    let rects = []

    function createRect(width, height) {
        return {
            width,
            height,
            area: function () { return this.width * this.height },
            compareTo: function(other) {
                const result = other.area() - this.area();
                return result || ( other.width - this.width );
            },
        }
    }

    for (let [w, h] of data) {
        rects.push(createRect(w, h));
    }

    rects.sort((a, b) => a.compareTo(b));
    return rects;
}
console.log(solve([[1, 20], [20, 1], [5, 3], [5, 3]]));