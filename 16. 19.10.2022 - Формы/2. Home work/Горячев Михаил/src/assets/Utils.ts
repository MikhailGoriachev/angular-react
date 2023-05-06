import {Book} from "../models/task02/Book";
import {FormControl} from "@angular/forms";

// Класс Утилиты
export class Utils {

    // сравнение двух вещественных чисел
    static equalsDouble(a: number, b: number): boolean {
        return Math.abs(a - b) < 1e-10;
    }

    // мужские фамилии
    static surnameMaleList: string[] = [
        "Шуляк",
        "Кологреев",
        "Есаулов",
        "Ряполов",
        "Михальченко",
        "Сахаров",
        "Якимович",
        "Малинов",
        "Бок",
        "Старицкий",
        "Задков",
        "Яминский",
        "Поджио",
        "Улицкий",
        "Синдеев"
    ]

    // мужские имена
    static nameMaleList: string[] = [
        "Анатолий",
        "Глеб",
        "Григорий",
        "Олег",
        "Василий",
        "Ярослав",
        "Андрей",
        "Егор",
        "Геннадий",
        "Леонид",
        "Роман",
        "Артём",
        "Валентин",
        "Вадим",
        "Виктор"
    ]

    // мужские отчества
    static patronymicMaleList: string[] = [
        "Даниилович",
        "Герасимович",
        "Сигизмундович",
        "Никанорович",
        "Моисеевич",
        "Валериевич",
        "Давыдович",
        "Сократович",
        "Титович",
        "Епифанович",
        "Онуфриевич",
        "Пахомович",
        "Изяславович",
        "Аполлинариевич",
        "Филиппович"
    ]

    // женские фамилии
    static surnameFemaleList: string[] = [
        "Семенова",
        "Бабикова",
        "Крылаева",
        "Маркина",
        "Филиппова",
        "Эвентова",
        "Слепцова",
        "Батурина",
        "Лепёхина",
        "Федулова",
        "Клюкина",
        "Островерхова",
        "Жванеца",
        "Ясавеева",
        "Райта"
    ]

    // женские имена
    static nameFemaleList: string[] = [
        "Инна",
        "Нина",
        "Виктория",
        "Оксана",
        "Юлия",
        "Алина",
        "Кристина",
        "Надежда",
        "Дарья",
        "Анфиса",
        "Любовь",
        "Кристина",
        "Диана",
        "Светлана",
        "Лилия"
    ]

    // женские отчества
    static patronymicFemaleList: string[] = [
        "Казимировна",
        "Геннадиевна",
        "Геннадиевна",
        "Игнатиевна",
        "Фомевна",
        "Всеволодовна",
        "Федотовна",
        "Романовна",
        "Борисовна",
        "Давидовна",
        "Вячеславовна",
        "Тимуровна",
        "Константиновна",
        "Родионовна",
        "Захаровна"
    ]

    // получить целое случайное число
    static getInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // получить вещественное случайное число
    static getDouble(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    // получить фио
    static getFullName(gender: "male" | "female" | "none" = "none"):
        { surname: string; name: string; patronymic: string } {

        let male = () => {
            return {
                surname: this.surnameMaleList[Utils.getInt(0, this.surnameMaleList.length)],
                name: this.nameMaleList[Utils.getInt(0, this.nameMaleList.length)],
                patronymic: this.patronymicMaleList[Utils.getInt(0, this.patronymicMaleList.length)]
            }
        };

        let female = () => {
            return {
                surname: this.surnameFemaleList[Utils.getInt(0, this.surnameFemaleList.length)],
                name: this.nameFemaleList[Utils.getInt(0, this.nameFemaleList.length)],
                patronymic: this.patronymicFemaleList[Utils.getInt(0, this.patronymicFemaleList.length)]
            }
        };

        switch (gender) {
            case "male":
                return male();
            case "female":
                return female();
            case "none":
                return ((Math.random() * 2) & 1) === 0 ? male() : female();
        }
    }

    // получить фамилию и инициалы
    static getInitials(gender: "male" | "female" | "none" = "none"): string {
        let data = Utils.getFullName(gender);
        return `${data.surname} ${data.name[0]}. ${data.patronymic[0]}.`;
    }

    // коллекция данных о книгах
    static bookList = [

        new Book(1, "Джон Сонмез", "Путь программиста", 2016, Utils.getInt(10, 15) * 100,
            "book-path-programmer.jpg"),
        new Book(2, "Ямамото Цунэтомо", "Путь самурая (Хагакурэ)", 2019,
            Utils.getInt(10, 15) * 100, "book-samurai.jpg"),
        new Book(3, "Стив Макконнелл", "Совершенный код", 1993, Utils.getInt(10, 15) * 100,
            "book-1.jpg"),
        new Book(4, "Эрвин Кнут", "Искусство программирования", 1968,
            Utils.getInt(10, 15) * 100, "book-2.jpg"),
        new Book(5, "Кент Бек", "Refactoring", 1999, Utils.getInt(10, 15) * 100,
            "book-3.jpg"),
        new Book(6, "Брюс Эккель", "Философия Java", 1998, Utils.getInt(10, 15) * 100,
            "book-4.jpg"),
        new Book(7, "Анна Фролова", "Собачье счастье", 2021, Utils.getInt(10, 15) * 100,
            "book-5.jpg"),
        new Book(8, "Чиннатхамби Кирупа", "JavaScript с нуля", 2021,
            Utils.getInt(10, 15) * 100, "book-6.jpg"),
        new Book(9, "Эрих Гамма", "Design Patterns", 1994, Utils.getInt(10, 15) * 100,
            "book-7.jpg"),
        new Book(10, "Эрик Фриман", "Паттерны проектирования", 2004,
            Utils.getInt(10, 15) * 100, "book-8.jpg")

    ];

    // получить случайную книгу
    static getBook(): Book {
        return Utils.bookList[Utils.getInt(0, Utils.bookList.length)];
    }

    // проверка валидности контрола
    static getClassValid(control: FormControl): string {
        return control.dirty ? (control.valid ? "is-valid" : "is-invalid") : "";
    }
}
