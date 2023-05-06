// Класс Прямоугольник
class Rectangle extends Figure {
    // конструктор
    constructor(a, b) {
        super("Прямоугольник");
        this._a = a;
        this._b = b;
        this._image = "rectangle.png";
    }
    get a() {
        return this._a;
    }
    set a(value) {
        this._a = value > 0 ? value : this._a;
    }
    get b() {
        return this._b;
    }
    set b(value) {
        this._b = value > 0 ? value : this._b;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }
    // вычисление площади поверхности
    area() {
        return this._a * this._b;
    }
    // вычисление периметра
    perimeter() {
        return (this._a + this._b) * 2;
    }
    // функция вывода фигуры
    toTableRow(n) {
        // строка для вывода
        return `
            <tr>
                <td>${n}</td>
                <td><img src="../images/figures/${this.image}" class="w-10rem" /></td>
                <td>${this.name}</td>
                <td>a: ${this._a.toFixed(5)}</td>
                <td>b: ${this._b.toFixed(5)}</td>
                <td>————</td>
                <td>${this.perimeter().toFixed(5)}</td>
                <td>${this.area().toFixed(5)}</td>
            </tr>
        `;
    }
}
//# sourceMappingURL=Rectangle.js.map