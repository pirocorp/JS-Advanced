window.addEventListener('load', solve);

function solve() {
    const inputs = getInputs();
    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('table tfoot .total-price');

    const addButton = document.getElementById('add');
    addButton.addEventListener('click', onAddButtonClickHandler);

    function getInputs() {
        const fields = document.querySelectorAll('form input');
        const description = document.querySelector('form textarea');   

        return {
            model : fields[0],
            year : fields[1],
            description : description,
            price : fields[2],
        };
    };

    function onAddButtonClickHandler(e) {
        e.preventDefault();

        const fields = Object.values(inputs);
        const emptyValue = Array.from(fields).map(f => f.value.trim()).some(f => f == '');

        var year = Number(inputs.year.value);
        var price = Number(inputs.price.value);
        var model = inputs.model.value;
        var description = inputs.description.value;

        if(emptyValue
            || year <= 0
            || price <= 0) {
            return;
        }

        const moreInfoButton = createDOMElement('button', {classList: 'moreBtn'}, 'More Info');
        const buyButton = createDOMElement('button', {classList: 'buyBtn'}, 'Buy it');

        const furnitureInfo = createDOMElement(
            'tr',
            {
                classList: 'info'
            },
            createDOMElement('td', {}, model),
            createDOMElement('td', {}, price.toFixed(2)),
            createDOMElement(
                'td', 
                {}, 
                moreInfoButton,
                buyButton
            )
        );

        const furnitureDetails = createDOMElement(
            'tr',
            {
                classList: 'hide',
            },
            createDOMElement('td', {}, `Year: ${year}`),
            createDOMElement('td', {colSpan: '3'}, `Description: ${description}`)
        );
        
        moreInfoButton.addEventListener('click', onMoreInfoClickHandler.bind(moreInfoButton, furnitureDetails));
        buyButton.addEventListener('click', onBuyButtonClickHandler.bind(null, furnitureInfo, furnitureDetails));

        furnitureList.appendChild(furnitureInfo);
        furnitureList.appendChild(furnitureDetails);

        Array.from(fields).forEach(i => i.value = '');
    };
    
    function onMoreInfoClickHandler(furnitureDetails) {
        const contents = 'contents';

        const lessInfo = 'Less Info';
        const moreInfo = 'More Info';

        if(furnitureDetails.style.display === contents) {
            furnitureDetails.style.display = '';
            this.textContent = moreInfo;
        } else {         
            furnitureDetails.style.display = contents;
            this.textContent = lessInfo;
        }
    };

    function onBuyButtonClickHandler(furnitureInfo, furnitureDetails) {
        const currentTotal = Number(totalPrice.textContent);
        const furniturePrice = Number(furnitureInfo.querySelectorAll('.info > td')[1].textContent);

        const newTotal = currentTotal + furniturePrice;
        totalPrice.textContent = newTotal.toFixed(2);

        furnitureInfo.remove();
        furnitureDetails.remove();
    };

    // Creates elements (type, attributes, ...elements)
    function createDOMElement(type, attr, ...content) {
        const element = document.createElement(type);       
    
        // Adds element attributes
        Object.assign(element, attr);
  
        /* for (const prop in attr) {
            element[prop] = attr[prop];
        } */
    
        for (let item of content) {
            if(typeof(item) === 'string' 
            || typeof(item) === 'number') {
                item = document.createTextNode(item);
            }
    
            element.appendChild(item);
        }
    
        return element;
    };
}
