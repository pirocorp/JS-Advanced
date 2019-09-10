function solve(carDescription) {
    const storage = {
        engines: [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 },
        ],
    };

    let carEngine;

    for (const currentEngine of storage.engines) {
        if(currentEngine.power >= carDescription.power) {
            if (carEngine) {
                if(currentEngine.power < carEngine.power) {
                    carEngine = currentEngine
                }
            } else {
                carEngine = currentEngine;
            }
        }
    }

    const wheelSize = carDescription.wheelsize % 2 === 0 ? carDescription.wheelsize - 1 : carDescription.wheelsize;

    const car = {
        model: carDescription.model,
        engine: carEngine,
        carriage: { type: carDescription.carriage, 
                    color: carDescription.color, },
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
    };

    return car;
}
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));