function solve(steps, sizeOfStep, speed) {
    let distance = steps * sizeOfStep; //In meters
    let rests = Math.floor(distance / 500); //In minutes

    let time = (distance / 1000) / speed + rests / 60;

    let timeInHours = Math.floor(time);
    time = (time - timeInHours) * 60;
    timeInHours = pad(timeInHours);

    let timeInMinutes = Math.floor(time);
    time = (time - timeInMinutes) * 60;
    timeInMinutes = pad(timeInMinutes);

    let timeInSeconds = Math.ceil(time);
    timeInSeconds = pad(timeInSeconds);

    console.log(`${timeInHours}:${timeInMinutes}:${timeInSeconds}`)

    function pad(number) {
        if (number < 10) {
            return `0${number}`
        }

        return number;
    }
}

solve(1520, 0.70, 5.5);
solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);