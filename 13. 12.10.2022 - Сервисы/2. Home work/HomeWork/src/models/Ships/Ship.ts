// Класс Корабль
export class Ship {

    // id
    id: number = 100;

    // тип
    typeShip: string = "";

    // название
    name: string = "";

    // длина
    length: number = 0;

    // ширина
    width: number = 0;

    // водоизмещение
    displacement: number = 0;

    // год постройки
    year: number = 0;

    // фото корабля
    imageFile: string = "";


    // конструктор
    constructor(typeShip?: string, name?: string, length?: number, width?: number, displacement?: number, year?: number, imageFile?: string) {
        this.typeShip = typeShip ?? this.typeShip;
        this.name = name ?? this.name;
        this.length = length ?? this.length;
        this.width = width ?? this.width;
        this.displacement = displacement ?? this.displacement;
        this.year = year ?? this.year;
        this.imageFile = imageFile ?? this.imageFile;
    }

    assign(obj: Ship) {
        Object.assign(this, obj);

        return this;
    }
}
