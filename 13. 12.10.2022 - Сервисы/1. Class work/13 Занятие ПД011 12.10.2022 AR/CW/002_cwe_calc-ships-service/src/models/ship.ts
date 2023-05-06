// Сведения о корабле: тип, название, длина, ширина, водоизмещение, год постройки, фото корабля
export class Ship {
  constructor(
    public id: number = 1,           // идентификатор
    public type: string = "",        // тип
    public name: string = "",        // название
    public length: number = 0,        // длина
    public width: number = 0,         // ширина
    public displacement: number = 0,  // водоизмещение
    public builtYear: number = 0,     // год постройки
    public photo: string = ""         // фото корабля
  ) { }

  // присваивание одноименных полей объекта s, используем
  // при десериализации из JSON
  assign(s: Ship) {
    Object.assign(this,s);
    return this;
  } // assign
} // class Ship
