class MyNumberCollection {

    private data: number[] = [];

    public add(item: number) {
        this.data.push(item);
    }

    // Symbol - cредство ES6, предоставляющее уникальный идентификатор
    [Symbol.iterator]() {
        let current: number = 0;
        let data = this.data;

        // по соглашению, итератор должен возвращать объект,
        // содержащий метод next(),
        // метод также возвращает объект {done: boolean, value: T}
        // и обеспечивает продвижение итератора по коллекции
        return {
            next() {
                if (current < data.length) {
                    return {
                        done: false,
                        value: data[current++]
                    };
                } else {
                    return {
                        done: true,
                        value: null
                    };
                } // if
            } // next
        }
    } // [Symbol.iterator]
}

let myNumberCollection = new MyNumberCollection();
myNumberCollection.add(10);
myNumberCollection.add(20);
myNumberCollection.add(30);
myNumberCollection.add(40);
myNumberCollection.add(42);

// в цикое типа for .. of используется Symbol.iterator
for (const item of myNumberCollection) {
    console.log(item);
}
