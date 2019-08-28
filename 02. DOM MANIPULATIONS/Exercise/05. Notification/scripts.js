function notify(message) {
    const notificationElement = document.getElementById('notification');

    notificationElement.textContent = message;
    notificationElement.style.display = 'block';

    function removeNotification() {
        notificationElement.textContent = '';
        notificationElement.style.display = 'none';
    }

    setTimeout(removeNotification, 2000);
}