// интерфейс для реализации классом, содержиащим данные, которые можно извлечь.
// коллекция данных
interface MyIterable<T> {
    // возвращает итератор по коллекции
    iterator(): MyIterator<T>
}

// описывает объект, контролирующий обход данных в коллекции
interface MyIterator<T> {
    next(): MyIteratorResult<T>;
}

// интерфейс описывает объект, определяющий результаты работы итератора
interface MyIteratorResult<T> {
    // true -- когда простмотр коллекции завершен, нет следующего элемента
    done: boolean;

    // данные из коллекции
    value: T;
}
//------------------------------------------------------------------------------------

class Point {
    constructor(public x: number, public y: number) { }
}

// коллекция
class Vector implements MyIterable<Point> {

    private points: Point[] = [];

    public add(item: Point) {
        this.points.push(item);
    }

    // вернуть итератор
    // игнорировать ошибку в следующей строке
    // @ts-ignore
    iterator() {
        return new VectorIterator(this.points);
    }
} // class Vector


// итератор для коллекции Vector
class VectorIterator implements MyIterator<Point> {

    private current: number = 0;

    constructor(private points: Point[]) { }

    // игнорировать ошибку в следующей строке
    //@ts-ignore
    public next(): MyIteratorResult<Point> {
        if (this.current < this.points.length) {
            return {
                done: false,
                value: this.points[this.current++]
            };
        } else {
            return {
                done: true,
                value: null
            };
        } // if
    } // next
} // class VectorIterator

let vector: Vector = new Vector();
vector.add(new Point(10, 20));
vector.add(new Point(1, 30));
vector.add(new Point(0, 2));
vector.add(new Point(15, 12));
vector.add(new Point(42, -2));

// использование итератора
let iterator = vector.iterator();
let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

// не будет компилироваться
// console.log('Итератор');
// for (const iteratorElement of vector) {
//     console.log(iteratorElement.value);
// }