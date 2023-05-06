interface EqualityComparer<T> {
    equals(item: T): boolean;     // a.equals(b)
}

// коллекция уникальных значений, уникальность определяем
// при помощи EqualityComparer
// Для EqualityComparer<T> type variable будет такой же как для UniqueCollection
class UniqueCollection<T extends EqualityComparer<T>> {

    private data: T[] = [];

    public add(item: T) {
        let notUnique: boolean = this.data.some(x => x.equals(item));
        if (notUnique) { return; }
        this.data.push(item);
    } // add

    public showData() {
        this.data.forEach(x => console.log(x));
    }
}

// класс для записи в коллекцию
class Order implements EqualityComparer<Order> {

    constructor(
        public id: number,
        public customer: string,
        public product: string
    ) { }

    // для сравнения двух объектов типа Order
    // по id
    equals(item: Order): boolean {
        return item.id == this.id;
    }
}

let order1 = new Order(1, "John", "Laptop");
let order2= new Order( 2, "Robin", "Mobile Phone");
let order3 = new Order(3, "Bob", "Book");
let order4= new Order( 1, "Stephan", "Keyboard");

let collection = new UniqueCollection<Order>();
collection.add(order1);
collection.add(order2);
collection.add(order3);
collection.add(order4);

collection.showData();