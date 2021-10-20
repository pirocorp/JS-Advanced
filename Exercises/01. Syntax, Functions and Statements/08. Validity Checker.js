function solve(...params) {
    let x1 = +params[0];
    let y1 = +params[1];
    let x2 = +params[2];
    let y2 = +params[3];

    let pointOneDistanceToCenter = distanceBetweenTwoPoints(x1, y1, 0, 0);
    let pointTwoDistanceToCenter = distanceBetweenTwoPoints(x2, y2, 0, 0);
    let distanceBetweenPoints = distanceBetweenTwoPoints(x1, y1, x2, y2);

    validateDistance(x1, y1, 0, 0, pointOneDistanceToCenter);
    validateDistance(x2, y2, 0, 0, pointTwoDistanceToCenter);
    validateDistance(x1, y1, x2, y2, distanceBetweenPoints);

    function validateDistance(x1, y1, x2, y2, distance) {
        if (distance % 1 !== 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        }
    }

    function distanceBetweenTwoPoints(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);