function fruit(fruit, weight, price) {
    weight /= 1000;
    const money = weight * price;

    return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`;
}

console.log(fruit('orange', 2500, 1.80));
console.log(fruit('apple', 1563, 2.35));