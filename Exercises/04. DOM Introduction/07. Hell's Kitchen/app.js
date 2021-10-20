function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
        const input = document.getElementsByTagName('textarea')[0].value;
        const restaurantsInputs = readRestaurants(input);

        let restaurants = new Map();

        restaurantsInputs.forEach(restaurant => {
            if(!restaurants.has(restaurant.name)){
                restaurants.set(restaurant.name, new Map());
            }

            let currentRestaurant = restaurants.get(restaurant.name);

            restaurant.workers
                .forEach(worker => currentRestaurant.set(worker.name, worker.salary));
        });

        const bestRestaurant = getBestRestaurant(restaurants);
        const bestRestaurantElement = document.querySelector('#bestRestaurant p');

        const averageSalary = bestRestaurant.workers
            .map(x => x.salary)
            .reduce((x, y) => x + y)
            / bestRestaurant.workers.length;

        bestRestaurantElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.workers[0].salary.toFixed(2)}`
   
        const bestWorkersElement = document.querySelector('#workers p');
        const workersText = bestRestaurant.workers.reduce((a, b) => a += `Name: ${b.name} With Salary: ${b.salary} `, '');
        bestWorkersElement.textContent = workersText;
    }

    function getBestRestaurant(restaurants) {
        const restaurantsArr = Array
            .from(restaurants, ([name, value]) => ({
                name,
                workers: value
            }))
            .map(r => ({
                name: r.name,
                workers: Array
                    .from(r.workers, ([name, salary]) => ({ name, salary }))
                    .sort((a, b) => b.salary - a.salary),
            }))
            .sort((a, b) => {
                const averageA = a.workers
                    .map(x => x.salary)
                    .reduce((x, y) => x + y)
                    / a.workers.length;

                const averageB = b.workers
                    .map(x => x.salary)
                    .reduce((x, y) => x + y)
                    / b.workers.length;

                return averageB - averageA;
            });

        const bestRestaurant = restaurantsArr[0];
        return bestRestaurant;
    }

    function readRestaurants(input) {
        return JSON.parse(input)
            .map(x => {
                const tokens = x.split('-').map(t => t.trim());
                const name = tokens[0];
                const workers = tokens[1]
                    .split(',')
                    .map(w => {
                        w = w.trim();

                        const workerTokens = w.split(' ')
                            .map(wt => wt.trim());

                        const name = workerTokens[0];
                        const salary = Number(workerTokens[1]);

                        return {
                            name,
                            salary
                        };
                    });

                return {
                    name,
                    workers
                };
            });
    }
}