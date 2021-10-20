function solve(input) {
    const juiceDictionary = new Map();
    const bottles = new Map();

    input.forEach(s => {
        const[juice, value] = s.split(' => ').map(x => x.trim());
        
        if (!juiceDictionary.has(juice)) {
            juiceDictionary.set(juice, 0);
        }

        let newValue = Number(juiceDictionary.get(juice)) + Number(value);

        while(newValue >= 1000) {
            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }

            bottles.set(juice, bottles.get(juice) + 1);
            newValue -= 1000;
        }

        juiceDictionary.set(juice, newValue);
    });

    Array.from(bottles.entries()).forEach(([juice, count]) => console.log(`${juice} => ${count}`));
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);