/**
 * @param {Number} budgetMoney
 * @param {Object<meal:Object<products:Object<name:String, quantity:Number>, price: Number>>} menu
 * @param {Object<product:String, quantity:Number>} stockProducts
 */
class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    };

    /**
     * 
     * @param {Array<String>} products "{productName} {productQuantity} {productTotalPrice}"
     */
    loadProducts(products) {
        const result = [];

        for (const product of products) {
            let currentOperation = '';

            let [productName, productQuantity, productTotalPrice] = product
                .split(' ')
                .map(x => x.trim())
                .filter(x => x !== '');

            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if(productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;

                if(!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += productQuantity;
                currentOperation = `Successfully loaded ${productQuantity} ${productName}`;
                
            } else {
                currentOperation = `There was not enough money to load ${productQuantity} ${productName}`;
            }
            
            result.push(currentOperation);
            this.history.push(currentOperation);
        }

        return result.join('\n')
    };

    /**
     * 
     * @param {String} meal 
     * @param {Array<String>} neededProducts "{productName} {productQuantity}"
     * @param {Number} price 
     */
    addToMenu(meal, neededProducts, price) {
        if(this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        const products = neededProducts
            .map(p => p.split(' '))
            .reduce((a, v) => ({...a, [v[0]]: Number(v[1])}), {});

        this.menu[meal] = {
            price,
            products
        };

        const menuItemsCount = Object.keys(this.menu).length;

        if(menuItemsCount === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        }

        return `Great idea! Now with the ${meal} we have ${menuItemsCount} meals in the menu, other ideas?`
    };

    showTheMenu() {
        const menuItemsCount = Object.keys(this.menu).length;

        if(menuItemsCount <= 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        return Object
            .keys(this.menu)
            .map(k => `${k} - $ ${this.menu[k].price}`)
            .join('\n');
    };

    /**
     * 
     * @param {String} meal 
     */
    makeTheOrder(meal) {
        if(!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const products = Object.keys(this.menu[meal].products);

        if(products.some(p => !this.stockProducts.hasOwnProperty(p) || this.stockProducts[p] < this.menu[meal].products[p])){
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        products.forEach(p => this.stockProducts[p] -= this.menu[meal].products[p]);

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    };
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 12 3', 'Honey 50 4', 'Strawberries 20 10']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 5', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.showTheMenu());

