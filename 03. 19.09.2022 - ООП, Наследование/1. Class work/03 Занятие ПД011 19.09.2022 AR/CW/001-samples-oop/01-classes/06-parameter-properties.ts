class Person {
    // Если при определении параметров в конструкторе указать для них модификаторы доступа
    // Эти параметры автоматически станут полями класса с соответствующим уровнем доступа
    // и значениями, которые будут установлены при вызове конструктора.
    constructor(public name: string, private age: number = 42) { }

    print() {
        console.log(`${this.name} ${this.age}`);
    }
} // class Person

let person: Person = new Person("Иван Петров", 25);
person.print();

person.name = "Денис"; // поле public
// person.age = 111; // поле private
person.print();

// используем значение по умолчанию
let person1: Person = new Person("Мария");
person1.print();