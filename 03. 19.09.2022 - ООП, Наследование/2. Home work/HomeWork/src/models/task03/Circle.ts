// Класс Окружность
class Circle extends Figure implements IFlatFigure {

    // радиус
    private _radius: number;

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value > 0 ? value : this._radius;
    }

    // изображение фигуры
    private _image: string;

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    // конструктор
    constructor(radius: number) {
        super("Окружность");
        this._radius = radius;
        this._image = "circle.png";
    }

    // вычисление площади поверхности
    area(): number {
        return Math.PI * (this.radius ** 2);
    }

    // вычисление периметра
    perimeter(): number {
        return 2 * Math.PI * this._radius;
    }

    // функция вывода фигуры
    toTableRow(n: number): string {
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
