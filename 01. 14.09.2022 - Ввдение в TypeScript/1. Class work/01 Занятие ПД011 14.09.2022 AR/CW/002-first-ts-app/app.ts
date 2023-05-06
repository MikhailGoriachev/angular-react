// пример кода на TypeScript
class Hello {
    // поля класса
    private messageText: string;
    private a: number;
    private b: number;

    // конструктор
    constructor(messageText: string, a: number, b: number) {
        this.messageText = messageText;
        this.a = a;
        this.b = b;
    }

    // метод класса
    showHello(): void {
        document.getElementById('out').innerHTML = '<h3>Привет, мир!</h3>';
    }

    // еще метод класса
    showSum(): void {
        // корень квадартный извлекаем для десмонстрации использования стандартных
        // объектов JavaScript
        let sum = Math.sqrt(this.a * this.a) + Math.sqrt(this.b * this.b);
        document.getElementById('sum').innerHTML = `<h3>Сумма ${this.a} и ${this.b} равна ${sum}</h3>`;
    }

    // и еще один метод класса
    // пример обращения к стандартной функции JS
    showAlert(): void {
        alert(this.messageText);
    }
} // class Hello

// создание обекта класса Hello
let hello = new Hello("Привет, мир TypeScript!", 40, 2);

hello.showHello();
hello.showSum();

hello.showAlert();