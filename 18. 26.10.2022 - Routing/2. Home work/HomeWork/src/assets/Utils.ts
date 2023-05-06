import {AbstractControl, FormControl} from "@angular/forms";
import {Level} from "../models/task01/Level";

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

    // получить случайный элемент массива
    static getRandItem(array: any[]): any {
        return array[Utils.getInt(0, array.length)];
    }

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

    // проверка валидности контрола
    static getClassValid(control: AbstractControl): string {
        return control.dirty || control.touched ? (control.valid ? "is-valid" : "is-invalid") : "";
    }

    // разряды
    static levelList = [
        new Level("10-й кю", 1),
        new Level("9-й кю", 2),
        new Level("8-й кю", 3),
        new Level("7-й кю", 4),
        new Level("6-й кю", 5),
        new Level("5-й кю", 6),
        new Level("4-й кю", 7),
        new Level("3-й кю", 8),
        new Level("2-й кю", 9),
        new Level("1-й кю", 10),
        new Level("1-й Дан", 11),
        new Level("2-й Дан", 12),
        new Level("3-й Дан", 13),
        new Level("4-й Дан", 14),
        new Level("5-й Дан", 15)
    ];

    // генерация номера телефона
    static getPhone(): string {
        return `+38(050)-${Utils.getInt(100, 1000)}-${Utils.getInt(10, 100)}-${Utils.getInt(10, 100)}`;
    }

    // список тренеров
    static coachList = [...Array(4)].map(c => Utils.getInitials("male"));

    // http запрос
    static httpRequest(url: string, method: 'get' | 'post' | 'put' | 'delete') : Promise<any> {
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onreadystatechange = function () {
                if (xhr.status === 200) {
                    if (xhr.readyState === 4)
                        resolve(xhr.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };

            // обработка ошибок сети
            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };

            // запуск запроса
            xhr.send();
        });
    }
}
