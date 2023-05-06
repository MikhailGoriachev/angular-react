// сфера
class Circlee extends Figure {
    // конструктор
    constructor(name, radius) {
        super(name);
        this._radius = radius;
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
    // вычисление площади поверхности  S = 4π R 2
    area() {
        return 4 * Math.PI * this.radius * 2;
    }
    // вычисление объёма фигуры
    perimeter() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }
    // функция вывода фигуры
    toTableRow(n) {
        // строка для вывода
        return;
        `
            <tr>
                <td>${n}</td>
                <td>${this._radius}</td>
                <td>————</td>
                <td>————</td>
                <td>${this.perimeter().toFixed(5)}</td>
                <td>${this.area().toFixed(5)}</td>
            </tr>
        `;
    }
}
//# sourceMappingURL=Sphere.js.map