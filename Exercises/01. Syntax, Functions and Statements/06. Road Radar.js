function solve(speed, area) {
    let speedLimit = getSpeedLimit(area);

    let speeding = speed - speedLimit;

    if (speeding <= 0) {
        return `Driving ${speed} km/h in a ${speedLimit} zone`;
    }

    let message = `The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit}`;

    if (speeding <= 20) {
        return `${message} - speeding`;
    } else if (speeding <= 40) {
        return `${message} - excessive speeding`;
    } else {
        return `${message} - reckless driving`;
    }

    function getSpeedLimit(area) {
        let arr = {
            "motorway": 130,
            "interstate": 90,
            "city": 50,
            "residential": 20
        }

        return arr[area];
    }
}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));