// сервис - сведения о коллекции кораблей
import {Ship} from "./ship";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class FleetService {
  // массив сведений о кораблях
  ships: Ship[];

  constructor() {
    this.ships = new Array<Ship>();
  }

  // формирование коллекции сведений о кораблях
  getShips() {
    if (this.exists()) return this.loadFromLocalStore();

    let dataShips = [
      new Ship(101, "авианосец",             "Дзюйкаку", 236.1, 29.8, 32_105, 1941, "Zuikaku.jpg"),
      new Ship(102, "авианосец",             "Уосп",     226,   34.1, 19_716, 1940, "Wasp.jpg"),
      new Ship(103, "эскадренный миноносец", "Быстрый",  156.5, 17.2,  8_000, 1985, "Bystryi.jpg"),
      new Ship(104, "линейный корабль",      "Айова",    270,   33,   58_000, 1942, "Iowa.jpg"),
      new Ship(105, "линейный корабль",      "Тирпиц",   253.6, 36,   53_570, 1941, "Tirpitz.jpg"),
      new Ship(106, "линейный корабль",      "Марат",    184.9, 26.9, 26_900, 1914, "Marat.jpg"),
      new Ship(107, "линейный корабль",      "Миссури",  271,   33,   57_000, 1944, "Missouri.jpg"),
      new Ship(108, "линейный корабль",      "Ямато",    263,   38.9, 72_808, 1941, "Yamato.jpg"),
      new Ship(109, "авианосец",             "Интрепид", 265.9, 45,   36_960, 1943, "Intrepid.jpg"),
      new Ship(110, "авианосец",             "Акаги",    249,   31,   41_300, 1927, "Akagi.jpg"),
    ];

    // сохранить массив кораблей в локальном хранилище
    this.saveToLocalStore(dataShips);

    // вернуть массив кораблей
    return dataShips;
  } // getShips

  // проверка наличия коллекции в локальном хранилище
  exists(): boolean {
    return window.localStorage['lv-fleet-vl'] != undefined;
  } // exists

  // запись коллекции в локальное хранилище
  saveToLocalStore(ships: Ship[]) {
    window.localStorage['lv-fleet-vl'] = JSON.stringify(ships);
  } // saveToLocalStore

  // чтение коллекции из локального хранилища
  loadFromLocalStore(): Ship[]  {
    // прочитать строку из хранилища и распарсить ее в объект
    // сформировать коллекцию сведений о кораблях из сохраненных данных
    let ships: Ship[] = [];
    JSON
      .parse(window.localStorage["lv-fleet-vl"])
      .forEach((s: Ship) => ships.push(new Ship().assign(s)));
    return ships;
  } // loadFromLocalStore

  // получить фото кораблей
  getPhotos() {
    let temp = (this.exists()     // данные есть в локальном хранилище?
      ?this.loadFromLocalStore()  // да - читаем
      :this.getShips())           // нет - формируем
      .map(s => s.photo);         // получить массив имен файлов;
    return [...new Set(temp)];
  } // getPhotos
} // class Fleet
