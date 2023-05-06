// Пример на областьи видимости
class Employee {
    // модификатор доступа public - поле, видимое за пределами данного класса
    public name: string;

    // по умолчанию public
    position: string;

    // модификатор доступа private - поле закрытое и не доступно за пределами класса
    private company: string;

    // конструктор с параметрами
    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
        this.company = "Acme";
    } // constructor

    printToConsole() {
        console.log(`Employee ${this.name}, position - ${this.position}, company - ${this.company}`);
    }
} // class Employee

let emp1: Employee = new Employee("Ivan", "Developer");
emp1.name = "John";
emp1.position = "Team Lead";
// emp1.company = "..."; // [ts] Property 'company' is private and only accessible within class 'Employee'

emp1.printToConsole();