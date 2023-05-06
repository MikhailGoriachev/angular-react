// readonly свойство может быть установленно только в момент создания объекта
interface PointInterface {
    readonly x: number;
    readonly y: number;
}

let point: PointInterface = {x: 10, y: 20};
// point.x = 100; // ошибка
console.log(point);