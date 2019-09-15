function solution() {
    let $toyTypeElement = $('#toyType');
    let $toyPriceElement = $('#toyPrice');
    let $toyDescriptionElement = $('#toyDescription');

    const toyType = $toyTypeElement.val();
    const toyPrice = Number($toyPriceElement.val());
    const toyDescription = $toyDescriptionElement.val();

    if (toyType && 
        toyPrice && 
        toyDescription ) {

        let div = $('<div>')
            .addClass('gift')
            .append($('<img src="gift.png"/>'))
            .append($('<h2>').text(toyType))
            .append($('<p>').text(toyDescription))
            .append($(`<button>Buy it for $${toyPrice.toFixed(2)}</button>`)
                .on("click", () => div.remove()))
            .appendTo($('#christmasGiftShop'));                                
    }

    $toyTypeElement.val('');
    $toyPriceElement.val('');
    $toyDescriptionElement.val('');
}