// Класс Утилиты
export class Utils {

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

    // места назначения
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

    // получить номер рейса
    static getFlightNumber(): string {

        let array = ["AA", "DE", "BA", "KL", "OS"];

        return `${array[this.getInt(0, array.length)]} ${this.getInt(1_000, 10_000)}`;
    }

    // получить пункт назначения
    static getDestination(): string {
        return this.destinations[this.getInt(0, this.destinations.length)];
    }
}
