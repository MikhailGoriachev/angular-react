// Фабрика создания работников
import { Worker } from "./worker"
import { getRandomInt } from "../util/randoms";

export class WorkerFactory {
    static generateCollection(amount: number) {
        return [...Array(amount)].map((w,i) => this.generateWorker(i + 1));
    }

    static generateWorker(id: number) {
        return getRandomInt(0, 1) ? this.generateMale(id) : this.generateFeMale(id); 
    }

    static generateMale(id: number) {
        return new Worker(id, WorkerFactory.randomMaleName(), WorkerFactory.randomPosition(), "Мужской",
            WorkerFactory.randomAdmissionYear(), WorkerFactory.randomMaleImg(), WorkerFactory.randomSalary() );
    }

    static generateFeMale(id: number) {
        return new Worker(id, WorkerFactory.randomFemaleName(), WorkerFactory.randomPosition(), "Женский",
            WorkerFactory.randomAdmissionYear(), WorkerFactory.randomFemaleImg(), WorkerFactory.randomSalary() );
    }

    static randomMaleImg() { return `man_${getRandomInt(1,20)}.jpg`; }
    static randomFemaleImg() { return `woman_${getRandomInt(1,20)}.jpg`; }
    static randomSalary() { return getRandomInt(10_000, 30_000); }
    static randomAdmissionYear() { return getRandomInt(2010, 2021); }

    static randomMaleName() {
        return this.maleNames[getRandomInt(0, this.maleNames.length)];
    }

    static randomFemaleName() {
        return this.femNames[getRandomInt(0, this.femNames.length)];
    }
    
    static maleNames = [ "Рябинин А.А.", "Николаев Ф.А.", "Федоров М.М.", "Семенов М.Д.", "Федоров Д.М.",
        "Кузнецов Г.Д.", "Коновалов И.Ф.", "Титов В.М.", "Андреев А.И.", "Никитин Л.Г.",
        "Чесноков Д.Т.", "Комаров Д.А.", "Антонов В.И.", "Баранов М.А.", "Новиков А.Р.",
        "Сорокин Д.Д.", "Никольский Д.Г.", "Дорофеев А.М.", "Булгаков М.Р.", "Васильев А.М.",
        "Осипов А.Б.", "Руднев А.Л.", "Соколов З.Ф.", "Ершов Б.С.", "Макаров А.А.",
        "Киселев М.А.", "Гаврилов И.Д.", "Белов П.И.", "Моисеев А.Г.", "Яковлев Д.А."];
    
    static femNames = [ "Осипова В.Д.", "Крылова А.А.", "Глухова М.О.", "Филатова С.А.", "Яковлева Е.П.",
        "Михайлова В.К.", "Ерофеева С.С.", "Жданова Е.Т.", "Демина Е.И.", "Панова М.С.",
        "Тарасова Е.И.", "Коровина В.М.", "Сазонова М.Д.", "Иванова К.М.", "Королева Е.М.",
        "Пирогова С.М.", "Тимофеева В.М.", "Козырева М.С.", "Волкова В.Т.", "Коновалова К.А.",
        "Беликова В.В.", "Романова С.А.", "Суркова К.К.", "Мещерякова В.М.", "Васильева А.З.",
        "Ситникова Д.Н.", "Васильева А.М.", "Васильева С.Е.", "Булгакова А.Я.", "Ушакова К.Д."];

    static positions = [ "Технический писатель", "Официант", "Кладовщик", "Почтальон", "Геолог" , "Реабилитолог",
        "Космонавт", "Косметолог" , "Спортивный врач", "Бульдозерист", "Пекарь", "Холодильщик",
        "Археолог", "Строитель" , "Бизнес-аналитик", "Штурман", "Генетик", "Бизнес-тренер", "Швея",
        "Наладчик", "Биоинженер", "Менеджер по рекламе", "Кинодраматург", "Логопед", "Пастух", "Дорожный инспектор",
        "Воспитатель", "Травматолог", "Философ", "Лоцман", "Проходчик", "Зубной техник", "Заведующий складом",
        "Уборщик", "Судебный пристав", "Фальцовщик", "Вирусолог", "Невролог", "Проректор" ,"Администратор сайта",
        "Программист", "Блогер", "Консультант по туризму", "Таксист", "Логист", "Пожарный", "Лоббист", "Дерматовенеролог",
        "Инженер-технолог", "Официант"];

    static randomPosition() {
        return this.positions[getRandomInt(0, this.positions.length)];
    }
}
