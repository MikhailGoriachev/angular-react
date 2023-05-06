// Класс Окружность
class Circle extends Figure {
    // конструктор
    constructor(radius) {
        super("Окружность");
        this._radius = radius;
        this._image = "circle.png";
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value > 0 ? value : this._radius;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }
    // вычисление площади поверхности
    area() {
        return Math.PI * (Math.pow(this.radius, 2));
    }
    // вычисление периметра
    perimeter() {
        return 2 * Math.PI * this._radius;
    }
    // функция вывода фигуры
    toTableRow(n) {
        // строка для вывода
        return `
            <tr>
                <td>${n}</td>
                <td><img src="../images/figures/${this.image}" class="w-10rem"/></td>
                <td>${this.name}</td>
                <td>Радиус: ${this._radius.toFixed(5)}</td>
                <td>————</td>
                <td>————</td>
                <td>${this.perimeter().toFixed(5)}</td>
                <td>${this.area().toFixed(5)}</td>
            </tr>
        `;
    }
}
//# sourceMappingURL=Circle.js.map