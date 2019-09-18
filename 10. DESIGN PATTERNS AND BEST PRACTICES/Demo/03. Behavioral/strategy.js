//In parent class strategy is only declared not defined
class Sorter {
    sort(items) {
        const { comparer } = this;
        comparer = comparer || ((x, y) => 0) //default strategy
        items.sort(comparer);

        return items;
    }
}

//Descendents have ability to configure concrete strategy
class AscendingSorter extends Sorter {
    comparer(x, y) {
        return x - y;
    }
}

class DescendingSorter extends Sorter {
    comparer(x, y) {
        return y - x;
    }
}