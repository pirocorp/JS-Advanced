function solve() { 
    const $depart = $('#depart'); 
    const $arrive = $('#arrive');
    const $info = $('#info span');
    
    function getHost(currentId) {
        return host = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;
    }

    let currentHost = getHost('depot');
    let currentStop = '';

    function depart() {
        $depart.attr('disabled', true);
        $arrive.attr('disabled', false);

        $.ajax({
            url: currentHost,
            success: success,
            error: error,            
        });

        function success(data) {
            currentStop = data.name;
            $info.text(`Next stop ${currentStop}`);
            currentHost = getHost(data.next);
        }

        function error(data) {
            console.log(data);
        };       
    };

    function arrive() {
        $depart.attr('disabled', false);
        $arrive.attr('disabled', true);

        $info.text(`Arriving at ${currentStop}`);
    };

    return {
        depart,
        arrive
    };
}    