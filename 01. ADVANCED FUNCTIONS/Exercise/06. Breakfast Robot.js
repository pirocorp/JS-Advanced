function createManager(){
    const getRecipe = (function () {
        const recipes = {
            apple: {
                carbohydrate: 1,
                flavour: 2,
            },

            lemonade: {
                carbohydrate: 10,
                flavour: 20,
            },

            burger: {
                carbohydrate: 5,
                fat: 7,
                flavour: 3,
            },

            eggs: {
                protein: 5,
                fat: 1,
                flavour: 1,
            },

            turkey: {
                protein: 10,
                carbohydrate: 10,
                fat: 10,
                flavour: 10
            },
        }

        return function (recipe) {
            if (recipes.hasOwnProperty(recipe)) {
                const copiedRecipe = {}
                const originalRecipe = recipes[recipe];

                for (const key in originalRecipe) {
                    copiedRecipe[key] = originalRecipe[key];
                }

                return copiedRecipe;
            }
        }
    })();

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    return function(inputString) {
        const inputTokens = inputString.split(' ')
            .filter(x => x !== '');

        command = inputTokens[0];

        function restock(tokens) {
            const microelement = tokens[1];
            const quantity = Number(tokens[2]);

            stock[microelement] += quantity;

            return 'Success';
        }

        function prepare(tokens) {
            const recipeString = tokens[1];
            const quantity = Number(tokens[2]);

            const recipe = getRecipe(recipeString);

            for (const key in recipe) {
                if(recipe[key] * quantity > stock[key]) {
                    return `Error: not enough ${key} in stock`;
                }
            }
            
            for (const key in recipe) {
                stock[key] -= recipe[key] * quantity;
            }

            return 'Success';
        }

        function report() {
            return `protein=${stock['protein']} carbohydrate=${stock['carbohydrate']} fat=${stock['fat']} flavour=${stock['flavour']}`;
        }

        switch (command) {
            case 'restock':
                return restock(inputTokens);
            case 'prepare':
                return prepare(inputTokens);
            case 'report':
                return report();
        }
    }
}

let manager = createManager();
console.log(manager('restock flavour 50'));
console.log(manager("prepare lemonade 4"));