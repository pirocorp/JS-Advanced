function getInfo() {
    const host = 'https://judgetests.firebaseio.com/businfo/';
    const $stopId = $('#stopId');
    const $stopName = $('#stopName');
    const $buses = $('#buses');
    
    $.ajax({
        url: host + $stopId.val() + '.json',
        success: success,
        error: error,
    });

    function success(data) {
        $stopName.text(data.name);

        $buses.empty();

        for (const key in data.buses) {
            const time = data.buses[key];
            $(`<li>Bus ${key} arrives in ${time} minutes</li>`)
                .appendTo($buses);
        }
    };

    function error(data) {
	$stopName.text('');
        $stopName.text('Error');
    }
}