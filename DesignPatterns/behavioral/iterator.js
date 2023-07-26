class ArrayIterator {
    constructor(collection) {
        this.index = 0
        this.data = collection
    }

    next() {
        return this.data[this.index++];
    }

    hasNext() {
        return this.index < this.data.length;
    }
};

const iterator = new ArrayIterator(['test', 'my', 'iterator']);
while(iterator.hasNext()) {
    console.log(iterator.next())
}

class ObjectIterator {
    constructor(collection) {
        this.index = 0;
        this.keys = Object.keys(collection) // для перебора объектов нужен массив ключей объекта
        this.data = collection
    }

    next() {
        return this.data[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
}

const pets = {
    cat: {name: 'Kit', color: 'white', age: '1'},
    dog: {name: 'Dog', color: 'black', age: '2'},
    fish: {name: 'Fish', color: 'silver', age: '1'},
};

const collection = new ObjectIterator(pets);

while(collection.hasNext()) {
    console.log(collection.next());
}