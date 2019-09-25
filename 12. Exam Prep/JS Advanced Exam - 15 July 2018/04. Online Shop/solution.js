function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    // Write your code here
 
    const $productElement = $('input.custom-select');
    const $priceElement = $('#price');
    const $quantityElement = $('#quantity');
    const $submitButton = $('#submit');
    const $capacityElement = $('#capacity');
    const $sumElement = $('#sum');
    const $inventoryListElement = $('ul.display');

    function reset() {
        $productElement.val('');
        $priceElement.val(1);
        $quantityElement.val(1);
        $submitButton.attr('disabled', true);
    }

    function disableInterface() {
        $capacityElement.val('full');
        $capacityElement.addClass('fullCapacity');
        $productElement.attr('disabled', true);
        $priceElement.attr('disabled', true);
        $quantityElement.attr('disabled', true);
        $submitButton.attr('disabled', true);
    }

    function addProduct() {
        $('<li>')
            .text(`Product: ${$productElement.val()} Price: ${$priceElement.val()} Quantity: ${$quantityElement.val()}`)
            .appendTo($inventoryListElement);
    }

    function onSubmitButtonClick() {
        const currentCapacity = Number($capacityElement.val());
        const currentQuantity = Number($quantityElement.val());
        let totalCapacity = currentCapacity + currentQuantity

        const currentSum = Number($sumElement.val());
        const currentPrice = Number($priceElement.val());

        if(totalCapacity <= 150) {
            $capacityElement.val(totalCapacity);
            $sumElement.val(currentSum + currentPrice);
            addProduct();
        } 

        if(totalCapacity === 150) {
            disableInterface();
        }
        
        reset();
    }

    $productElement.on('input', () => {
        let isEmpty = $productElement.val() === '';
        $submitButton.attr('disabled', isEmpty);
    });

    $submitButton.on('click', onSubmitButtonClick);
 }