function timer() {
    let timeInterval = setInterval(stopwatch, 1000);
    let isPaused = true;

    $seconds = $('#seconds');
    $minutes = $('#minutes');
    $hours = $('#hours');

	//Pad numeric string to the right
    function pad(num, size) {
        var s = "0".repeat(size) + num; //concatenating zeros and number
        return s.substring(s.length - size); //get last n(size) characters
    }

    function stopwatch() {
        if(isPaused) {
            return;
        }

        const currentSeconds = Number($seconds.text());
        const newSeconds = (currentSeconds + 1) % 60;

        const additionalMinute = Math.floor((currentSeconds + 1) / 60);        
        const currentMinutes = Number($minutes.text());
        const newMinutes = (currentMinutes + additionalMinute) % 60;

        const additionalHour = Math.floor((currentMinutes + additionalMinute) / 60);
        const newHours = Number($hours.text()) + additionalHour;

        $seconds.text(pad(newSeconds, 2));
        $minutes.text(pad(newMinutes, 2));
        $hours.text(pad(newHours, 2));
    }
    
    function onStartButtonClick() {
        isPaused = false;        
    }

    function onStopButtonClick() {
        isPaused = true;
    }

    $('#start-timer').click(onStartButtonClick);
    $('#stop-timer').click(onStopButtonClick);
}