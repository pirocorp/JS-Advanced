function makeReservation(selector) {
    function onSubmitButtonClick() {
        const $fullName = $('#fullName');
        const $email = $('#email');

        if($fullName.val() === '' || $email.val() === '') {
            return;
        }

        const $phoneNumber = $('#phoneNumber');
        const $address = $('#address');
        const $postalCode = $('#postalCode');

        $('#infoPreview')
            .append($('<li>').text(`Name: ${$fullName.val()}`))
            .append($('<li>').text(`E-mail: ${$email.val()}`))
            .append($('<li>').text(`Phone: ${$phoneNumber.val()}`))
            .append($('<li>').text(`Address: ${$address.val()}`))
            .append($('<li>').text(`Postal Code: ${$postalCode.val()}`));
        
        $fullName.val('');
        $email.val('');
        $phoneNumber.val('');
        $address.val('');
        $postalCode.val('');

        $('#submit').attr('disabled', true);
        $('#edit').attr('disabled', false);
        $('#continue').attr('disabled', false);
    }

    function onEditButtonClick() {
        const $infoPreview = $('#infoPreview');

        const text = $infoPreview
            .find('li')
            .toArray()
            .map(x => x.textContent.split(': ')[1]);
        
        $('#fullName').val(text[0]);
        $('#email').val(text[1]);
        $('#phoneNumber').val(text[2]);
        $('#address').val(text[3]);
        $('#postalCode').val(text[4]);

        $('#submit').attr('disabled', false);
        $('#edit').attr('disabled', true);
        $('#continue').attr('disabled', true);

        $infoPreview.html('');
    }

    function onContinueButtonClick() {
        function createDivInputLabel(text) {
            return $(`<div class="inputLabel">${text}<input></div>`);
        }

        function onCheckOutButtonClick() {
            $('#wrapper').html('<h4>Thank you for your reservation!</h4>');
        }

        function onChangePaymentOptions() {
            const selectedOption = $('#paymentOptions option:selected').val();
            const $extraDetails = $('#extraDetails');

            $extraDetails.html('');

            switch(selectedOption) {
                case 'creditCard':
                    $extraDetails
                        .append(createDivInputLabel("Card Number"))
                        .append($('<br>'))
                        .append(createDivInputLabel("Expiration Date"))
                        .append($('<br>'))
                        .append(createDivInputLabel("Security Numbers"))
                        .append($('<br>'))
                        .append($('<button id="checkOut">Check Out</button>').on('click', onCheckOutButtonClick));
                    break;
                case 'bankTransfer':
                    $extraDetails
                        .append($('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>'))
                        .append($('<button id="checkOut">Check Out</button>').on('click', onCheckOutButtonClick));
                    break;
            }
        }

        $('#submit').attr('disabled', true);
        $('#edit').attr('disabled', true);
        $('#continue').attr('disabled', true);

        $('#container')
            .append($('<h2>').text('Payment details'))
            .append($('<select id="paymentOptions" class="custom-select"></select>')
                .on('change', onChangePaymentOptions)
                .append($('<option selected disabled hidden>Choose</option>'))
                .append($('<option value="creditCard">Credit Card</option>'))
                .append($('<option value="bankTransfer">Bank Transfer</option>')))
            .append($('<div id="extraDetails"></div>'));
    }

    $('#submit').on('click', onSubmitButtonClick);
    $('#edit').on('click', onEditButtonClick);    
    $('#continue').on('click', onContinueButtonClick);    
}