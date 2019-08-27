function stopwatch() {
    const startButtonElement = document.getElementById('startBtn');
    const stopButtonElement = document.getElementById('stopBtn');
    const timeElement = document.getElementById('time');

    startButtonElement.addEventListener('click', startStopwatch);
    stopButtonElement.addEventListener('click', stopStopwatch);

    let time = 0;
    let timeInterval;

    function startStopwatch(e) {
        time = 0;
        showTime();

        startButtonElement.disabled = true;
        stopButtonElement.disabled = false;

        timeInterval = setInterval(stopwatch, 1000);
    }

    function stopStopwatch(e) {
        startButtonElement.disabled = false;
        stopButtonElement.disabled = true;

        clearInterval(timeInterval);
    }    

    function stopwatch() {
        time++;
        showTime();
    }

    function pad(num, size) {
        var s = "0".repeat(size) + num;
        return s.substr(s.length - size);
    }

    function showTime() {    
        let minutes = Math.floor(time / 60);
        let seconds = (time % 60);

        timeElement.textContent = `${pad(minutes, 2)}:${pad(seconds, 2)}`;        
    }
}