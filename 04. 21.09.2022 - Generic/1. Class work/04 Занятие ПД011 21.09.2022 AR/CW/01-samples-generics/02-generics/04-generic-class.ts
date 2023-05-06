// пример объявления обобщенного класса
class MyGenericClass<T> {
    public value: T;

    public method1(value1: T): void {
        console.log(value1);
    }

    public method2(): T {
        return this.value;
    }

    // вполне м.б. и не обобщенные методы
    public method3() { console.log('method3'); }
}

// Экземпляр обобщенного типа, закрытого типом number
let myGenericNumber = new MyGenericClass<number>();
myGenericNumber.method1(10);
myGenericNumber.value = 100;
console.log(myGenericNumber.method2());
myGenericNumber.method3();

// Экземпляр обобщенного типа, закрытого типом string
let myGenericString = new MyGenericClass<string>();
myGenericString.method1("hello");
myGenericString.value = "world";
console.log(myGenericString.method2());
myGenericString.method3();