function notify(message) {
    const notificationElement = document.getElementById('notification');

    notificationElement.textContent = message;
    notificationElement.style.display = 'block';

    const removeNotification = function () {
        notificationElement.style.display = 'none';
    }

    notificationElement.addEventListener('click', removeNotification);
}