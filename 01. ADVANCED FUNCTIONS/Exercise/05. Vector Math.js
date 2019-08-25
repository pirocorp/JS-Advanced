const solution = (function solve() {
    const result = {
        add: function(vect1, vect2) {
            return [
                vect1[0] + vect2[0],
                vect1[1] + vect2[1],
            ];
        },

        multiply: function(vect, scalar) {
            return [
                vect[0] * scalar,
                vect[1] * scalar
            ];
        },

        length: function(vect) {
            return Math.sqrt(vect[0] ** 2 + vect[1] ** 2);
        },

        dot: function(vect1, vect2) {
            return vect1[0] * vect2[0] + vect1[1] * vect2[1];
        },

        cross: function (vect1, vect2) {
            return vect1[0] * vect2[1] - vect1[1] * vect2[0];
        }
    };

    return result;
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4])); 
console.log(solution.dot([1, 0], [0, -1])); 
console.log(solution.cross([3, 7], [1, 0]));
