function acceptance() {
	function onOutOfStockButtonClick(ev) {
		const divElement = ev.currentTarget.parentElement;
		const parentElement = divElement.parentElement; 
		
		parentElement.removeChild(divElement);
	}

	function onAddItButtonClick() {
		const companyElement = document.querySelector('input[name="shippingCompany"]');
		const productElement = document.querySelector('input[name="productName"]');
		const quantityElement = document.querySelector('input[name="productQuantity"]');
		const scrapeElement = document.querySelector('input[name="productScrape"]');

		if(companyElement.value === '') {
			//console.log('Incorrect field: Company');
			return
		}

		if(productElement.value === '') {
			//console.log('Incorrect field: Product');
			return
		}

		if(quantityElement.value === '' || Number.isNaN(Number(quantityElement.value))) {
			//console.log('Incorrect field: Quantity');
			return
		}

		if(scrapeElement.value === '' || Number.isNaN(Number(scrapeElement.value))) {
			//console.log('Incorrect field: Scrape');
			return
		}

		const company = companyElement.value;
		const product = productElement.value;
		const quantity = Number(quantityElement.value);
		const scrape = Number(scrapeElement.value);

		const availableQuantity = quantity - scrape;

		if(availableQuantity <= 0) {
			return
		}

		const warehouseElement = document.getElementById('warehouse');

		const div = document.createElement('div');

		const pElement = document.createElement('p')
		pElement.textContent = `[${company}] ${product} - ${availableQuantity} pieces`;

		const buttonElement = document.createElement('button')
		buttonElement.setAttribute('type', 'button');
		buttonElement.textContent = 'Out of stock';
		buttonElement.addEventListener('click', onOutOfStockButtonClick);

		div.appendChild(pElement);
		div.appendChild(buttonElement);
		
		warehouseElement.appendChild(div);

		companyElement.value = '';
		productElement.value = '';
		quantityElement.value = '';
		scrapeElement.value= '';
	}

	document.getElementById('acceptance').addEventListener('click', onAddItButtonClick);
}