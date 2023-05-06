// Класс Утилиты
class Utils {

    // типы самолётов
    static aircraftTypes: string[] = [
        "Airbus A319neo",
        "ATR EVO",
        "Boeing 777X",
        "Boeing 737",
        "Boeing 757",
        "CRAIC CR929",
        "Comac C919",
        "Airbus A220",
        "Airbus A310",
        "Airbus A380",
    ];

    // места названия
    static destinations: string[] = [
        "Манчестер",
        "Амстердам",
        "Кёльн",
        "Гамбург",
        "Вена",
        "Лондон",
        "Рига",
        "Рио-де-Жанейро",
        "Нью-Йорк",
        "Варшрава"
    ];

    // полуить целое случайное число
    static getInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // получить вещественное случайное число
    static getDouble(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    // получить пункт названачения
    static getDestination(): string {
        return this.destinations[this.getInt(0, this.destinations.length)];
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
}
