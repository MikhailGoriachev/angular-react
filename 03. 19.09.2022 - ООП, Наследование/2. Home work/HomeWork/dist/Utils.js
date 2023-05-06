// Класс Утилиты
class Utils {
    // полуить целое случайное число
    static getInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    // получить вещественное случайное число
    static getDouble(min, max) {
        return Math.random() * (max - min) + min;
    }
    // получить пункт названачения
    static getDestination() {
        return this.destinations[this.getInt(0, this.destinations.length)];
    }
    // получить тип самолёта
    static getAircraftType() {
        return this.aircraftTypes[this.getInt(0, this.aircraftTypes.length)];
    }
    // получить номер рейса
    static getFlightNumber() {
        let array = ["AA", "DE", "BA", "KL", "OS"];
        return `${array[this.getInt(0, array.length)]} ${this.getInt(1000, 10000)}`;
    }
    // получить порт
    static getPort() {
        let ports = ['Шанхай', 'Сингапур', 'Тяньцзин', 'Циндао', 'Амстердама', 'Тайчжун', 'Бейрут'];
        return ports[this.getInt(0, ports.length)];
    }
    // получить название морского судна
    static getShipName() {
        let names = ["Knock Nevis", "CSCL Globe", "TI Asia", "Symphony of the Seas", "Q-Max", "Azzam"];
        return names[this.getInt(0, names.length)];
    }
    // получить название машины
    static getCarName() {
        let names = ["BMW X6", "BMW m3", "Audi A8", "Audi A4", "Mercedes XLS"];
        return names[this.getInt(0, names.length)];
    }
}
// типы самолётов
Utils.aircraftTypes = [
    "Airbus A319neo",
    "ATR EVO",
    "Boeing 777X",
    "Boeing 737",
    "Boeing 757",
    "CRAIC CR929",
    // "Comac C919",
    // "Airbus A220",
    // "Airbus A310",
    // "Airbus A380",
];
// места названия
Utils.destinations = [
    "Манчестер",
    "Амстердам",
    "Кёльн",
    "Гамбург",
    "Вена",
    "Лондон",
    // "Рига",
    // "Рио-де-Жанейро",
    // "Нью-Йорк",
    // "Варшрава"
];
//# sourceMappingURL=Utils.js.map