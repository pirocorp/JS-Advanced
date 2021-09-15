function solve(year, month, day) {
    month -= 1;

    let date = new Date(year, month, day);

    date.setDate(date.getDate() - 1);

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

console.log(solve(2016, 9, 30));
console.log(solve(2016, 10, 1));