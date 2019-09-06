class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        const methodHistory = [];

        for (const currentProduct of products) {
            let [productName, productQuantity, productPrice] = currentProduct.split(' ');
            productQuantity = Number(productQuantity);
            productPrice = Number(productPrice);

            if(this.budget >= productPrice) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }

                this.productsInStock[productName] += productQuantity;
                this.budget -= productPrice;
                const result = `Successfully loaded ${productQuantity} ${productName}`;
                this.actionsHistory.push(result);
                methodHistory.push(result);
            } else {
                const result = `There was not enough money to load ${productQuantity} ${productName}`;
                this.actionsHistory.push(result);
                methodHistory.push(result);
            }
        }

        return methodHistory.join('\n');
    }

    addToMenu(meal, productsNeeded, price) {
        const products = {};

        for (const productTokens of productsNeeded) {
            let [productName, productQuantity] = productTokens.split(' ');
            productQuantity = Number(productQuantity);
            const currentProduct = {
                name: productName,
                quantity: productQuantity,
            };

            products[productName] = currentProduct;
        }

        const currentMeal = {
            name: meal,
            products: products,
            price: price
        }

        if(this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in our menu, try something different.`;
        }

        this.menu[meal] = currentMeal;
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals on the menu, other ideas?`
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later...";
        }

        const menu = Object.keys(this.menu)
            .map(k => `${k} - $ ${this.menu[k].price}`);
        return menu.join('\n') + '\n';
    }

    makeTheOrder(meal) {
        const currentMeal = this.menu[meal];

        if(!currentMeal) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const products = Object.keys(currentMeal.products)
            .map(k => currentMeal.products[k]);

        for (const currentProduct of products) {
            if (!this.productsInStock.hasOwnProperty(currentProduct.name) ||
                this.productsInStock[currentProduct.name] < currentProduct.quantity) {

                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (const currentProduct of products) {
            this.productsInStock[currentProduct.name] -= currentProduct.quantity;
        }

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentMeal.price}.`;
    }
}

const myKitchen = new Kitchen(1000);
const loadResult = myKitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']);
console.log(loadResult);
console.log(myKitchen);

console.log(myKitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(myKitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(myKitchen.menu);
console.log(myKitchen.showTheMenu());
console.log(myKitchen.makeTheOrder('Pizza'));
console.log(myKitchen.makeTheOrder('frozenYogurt'));
console.log(myKitchen);