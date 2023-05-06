// Класс Автомобиль
class Car extends Vehicle {

    // конструктор
    constructor(name: string, price: number, speed: number, yearOfCreation: number, coord: Coord) {
        super(name, price, speed, yearOfCreation, coord);
    }


    // вывод в строки таблицы
    toTableRow(n: number): string {
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
