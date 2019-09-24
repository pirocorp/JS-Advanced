function addSticker() {
    function onXButtonClick(ev) {
        $($(ev.currentTarget).parent()).remove();
    }

    function createSticker(title, content) {
        return $('<li class="note-content"></li>')
            .append($('<a class="button">x</a>').on('click', onXButtonClick))
            .append($('<h2>').text(title))
            .append($('<hr>'))
            .append($('<p>').text(content));
    }

    const titleElement = $('input.title');
    const contentElement = $('input.content');

    const titleValue = titleElement.val();
    const contentValue = contentElement.val();

    if(titleValue && contentValue) {
        const stickerListElement = $('#sticker-list');
        const newSticker = createSticker(titleValue, contentValue);
        stickerListElement.append(newSticker);
        titleElement.val('');
        contentElement.val('');
    }
}