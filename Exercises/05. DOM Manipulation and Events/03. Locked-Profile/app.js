function lockedProfile() {
    const buttons = document.getElementsByTagName('button');

    function clickEventHandler(e) {
        const currentButton = e.currentTarget;
        const profileElement = currentButton.parentNode;
        const lockedStatus = profileElement.querySelector('input[type=radio]:checked').value;

        if (lockedStatus === 'lock') {
            return;
        }

        if (currentButton.textContent === 'Show more') {
            const hiddenInformationElement = profileElement.querySelector('div');
            hiddenInformationElement.style.display = 'block';
            currentButton.textContent = 'Hide it';
        } else {
            const hiddenInformationElement = profileElement.querySelector('div');
            hiddenInformationElement.style.display = 'none';
            currentButton.textContent = 'Show more';
        }
    }

    for (const button of buttons) {
        button.addEventListener('click', clickEventHandler);
    }
}