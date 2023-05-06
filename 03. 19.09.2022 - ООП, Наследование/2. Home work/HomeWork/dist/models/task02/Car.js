// Класс Автомобиль
class Car extends Vehicle {
    // конструктор
    constructor(name, price, speed, yearOfCreation, coord) {
        super(name, price, speed, yearOfCreation, coord);
    }
    // вывод в строки таблицы
    toTableRow(n) {
        return `
        <tr>
            <td>${n}</td>
            <td>${this.name}</td>
            <td>${this.price}</td>
            <td>${this.speed}</td>
            <td>${this.yearOfCreation}</td>
            <td>${this.coord}</td>    
            <td>————</td>    
            <td>————</td>    
            <td>————</td>
        </tr>`;
    }
}
//# sourceMappingURL=Car.js.map