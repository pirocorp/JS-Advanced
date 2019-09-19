(function() {
    function usernameValidator(username) {
        const usernameRegex = /^([a-zA-Z])([A-Za-z0-9_]){2,24}$/gm;

        return usernameRegex.test(username);
    }

    function lectorValidator(lector) {
        let isValid = false;

        if (lector !== 'name') {
            isValid = true;
        }

        return isValid;
    }

    function dateTimeValidator(dateTime) {
        let isValid = false;

        if (dateTime) {
            isValid = true;
        }

        return isValid;
    }

    function increaseConsultationCounter() {
        const currentConsultationsCountElement = $('.education article:nth-child(3) .box-footer span');
        const currentCount = Number(currentConsultationsCountElement.text());
        currentConsultationsCountElement.text(currentCount + 1);
    }

    function addNewConsultation(username, dateTime) {
        dateTime = dateTime.substring(5).replace(' ', ' - ');

        $('.education article:nth-child(3) .box-body ul')
            .append($(`<li><span>${username} - ${dateTime}</span><i class="fas fa-chevron-circle-right"></i></li>`));

        increaseConsultationCounter();
    }

    function addConsultation(event) {
        event.preventDefault();
        event.stopPropagation();

        const usernameElement = $('#username');
        const username = usernameElement.val();

        const selectedLectorElement = $('#lecturer option:selected');
        const lector = selectedLectorElement.val();

        const dateTimeElement = $('#dateTimeInput');
        const dateTime = dateTimeElement.val();        

        const usernameIsValid = usernameValidator(username);
        const lectorIsValid = lectorValidator(lector);
        const dateTimeIsValid = dateTimeValidator(dateTime);        

        if(usernameIsValid && lectorIsValid && dateTimeIsValid) {
            $.notify("Consultation added", "success");

            addNewConsultation(username, dateTime);

            usernameElement.val('');
            dateTimeElement.val('');
            $('#lecturer option[value=name]').prop('selected', true);
        } else {
            $.notify("Try again", "error");
        }
    }
    
    $('#bookHourBtn')
        .on('click', addConsultation);
})();
