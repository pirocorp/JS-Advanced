function validate() {
    const inputElement = document.getElementById('email');
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function validateInput(e) {
        const inputValue = inputElement.value;

        if (regex.test(inputValue)) {
            inputElement.classList.remove('error');
        } else {
            inputElement.classList.add('error');
        }
    }

    inputElement.addEventListener('change', validateInput);
}