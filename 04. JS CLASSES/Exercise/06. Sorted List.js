class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    _sortInnerList() {
        this.list.sort((a, b) => {
            return a -b;
        });
    }

    _checkIndexRange(index) {
        if (index < 0 || index > this.list.length - 1) {
            throw new Error('Index is out of range');
        }
    }

    add(element) {
        this.list.push(element);
        this._sortInnerList();

        this.size++;
    }

    remove(index) {
        this._checkIndexRange(index);
        this.list.splice(index, 1);

        this.size--;
    }

    get(index) {
        this._checkIndexRange(index);
        return this.list[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);