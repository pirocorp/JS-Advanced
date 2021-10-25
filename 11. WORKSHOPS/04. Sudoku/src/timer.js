export function createTimer() {
    const output = document.getElementById('timer');
    let lastTime = performance.now(); // DateTime.Now
    let elapsed = 0;

    let active = false;

    tick(lastTime);

    return {
        pause,
        resume
    }

    function pause() {
        active = false;
    };

    function resume() {
        lastTime = performance.now();
        active = true;
        tick(lastTime);
    }

    function tick(time) {
        const delta = time - lastTime;
        elapsed += delta;
        lastTime = time;

        const total = elapsed / 1000;
        const seconds = total % 60;
        const minutes = (total / 60) % 60;
        const hours = total / 3600;
        output.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        if(active) {
            requestAnimationFrame(tick);
        }
    }
};

const formatTime = (value) => ('0' + Math.floor(value)).slice(-2);