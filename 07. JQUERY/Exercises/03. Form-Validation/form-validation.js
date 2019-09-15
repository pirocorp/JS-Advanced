function validate() {
    function formIsValid() {
        let result = true;

        function validateUsername() {
            const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
            const $usernameElement = $('#username');
            const usernameValue = $usernameElement.val();

            if (usernameRegex.test(usernameValue)) {
                $usernameElement.css('border-color', '');
                
            } else {
                result = false;
                $usernameElement.css('border-color', 'red');
            }
        }

        function validateEmail() {
            const emailRegex = /[\w+]@([\w]*\.)+/;
            const $emailElement = $('#email');
            const emailValue = $emailElement.val();

            if (emailRegex.test(emailValue)) {
                $emailElement.css('border-color', '');
            } else {
                result = false;
                $emailElement.css('border-color', 'red');
            }
        }

        function validatePassword() {
            const passwordRegex = /^[\w]{5,15}$/i;
            const $passwordElement = $('#password');
            const passwordValue = $passwordElement.val();

            const $confirmPasswordElement = $('#confirm-password');
            const confirmPasswordValue = $confirmPasswordElement.val();

            if(passwordRegex.test(passwordValue) && passwordValue === confirmPasswordValue) {

                $passwordElement.css('border-color', '');
                $confirmPasswordElement.css('border-color', '');

            } else {

                result = false;
                $passwordElement.css('border-color', 'red');
                $confirmPasswordElement.css('border-color', 'red');
            }
        }

        function validateHidenFields() {
            const $companyElement = $('#company');

            if ($companyElement.is(':checked')) {
                const $companyNumberElement = $('#companyNumber');
                const companyNumberValue = Number($companyNumberElement.val());

                if( companyNumberValue >= 1000 && 
                    companyNumberValue <= 9999) {

                    $companyNumberElement.css('border-color', '');

                } else {

                    result = false;
                    $companyNumberElement.css('border-color', 'red');
                }
            }
        }

        validateUsername();
        validateEmail();
        validatePassword();
        validateHidenFields();

        return result;
    }

    function onSubmitButtonClick(ev) {
        ev.preventDefault();

        const $valid = $('#valid');

        if(formIsValid()) {
            $valid.css('display', 'block');
        } else {
            $valid.css('display', 'none');
        }
    }

    function onChangeIsCompanyCheckbox() {
        const $companyInfo = $('#companyInfo');

        if ($(this).is(':checked')) {
            $companyInfo.css('display', 'block')
        } else {
            $companyInfo.css('display', 'none')
        }
    }

    $('#submit').click(onSubmitButtonClick)
    $('#company').change(onChangeIsCompanyCheckbox)
}
