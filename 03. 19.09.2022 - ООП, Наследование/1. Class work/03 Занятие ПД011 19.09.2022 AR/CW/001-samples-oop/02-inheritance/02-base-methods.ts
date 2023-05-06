// базовый тип данных
class Shape {
    public name: string;

    constructor(name) {
        this.name = name;
    }

    public getInfo(): string {
        return `This is ${this.name}.`;
    }
} // class Shape


// производный тип данных
class Rect extends Shape {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        // обязательный вызов конструктора родительского класса
        super("Rectangle");

        this.width = width;
        this.height = height;
    }

    // пример метода, переопределяющего метод базовоо класса
    public getInfo(): string {
        // вызов метода родительского класса
        let baseInfo: string = super.getInfo();
        return `${baseInfo} Height = ${this.height}, Width = ${this.width}`;
    }
} // class Rect

// производный тип данных
class Circle extends Shape {
    public radius: number;

    constructor(radius: number) {
        super("Circle");
        this.radius = radius;
    }

    public getInfo(): string {
        let baseInfo: string = super.getInfo();
        return `${baseInfo} Radius = ${this.radius}`;
    }
} // class Circle

// полиморфизм
let shapes: Shape[] = []; // создание массива базового типа
shapes.push(new Rect(100, 200)); // заполнение массива экземплярами производного класса
shapes.push(new Circle(10));
shapes.push(new Circle(43));
shapes.push(new Rect(10, 30));
shapes.push(new Rect(6, 8));

// в массив shapes можно добавлять только объекты имеющие
// идентичную с классом Shape структуру
shapes.push({
    name: "foo",
    getInfo: () => { return "__bar__"},
});

for (const item of shapes) {
    let info: string = item.getInfo();
    console.log(info);
} // for i