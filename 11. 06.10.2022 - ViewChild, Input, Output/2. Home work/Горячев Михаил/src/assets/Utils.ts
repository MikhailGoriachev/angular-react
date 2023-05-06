import {Film} from "../models/task02/Film";

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

    // получить фамилию и инициалы
    static getInitials(gender: "male" | "female" | "none" = "none"): string {
        let data = Utils.getFullName(gender);
        return `${data.surname} ${data.name[0]}. ${data.patronymic[0]}.`;
    }

    // получить название файла изображения
    static getFileNameGender(gender: boolean): string {
        // название файлов для мужчин
        let manList = [
            'male_001.jpg',
            'male_002.jpg',
            'male_003.jpg',
            'male_004.jpg',
            'male_005.jpg',
            'male_006.jpg',
            'male_007.jpg',
            'male_008.jpg',
            'male_009.jpg',
            'male_010.jpg',
        ];

        // название файлов для женщин
        let womanList = [
            'female_001.jpg',
            'female_002.jpg',
            'female_003.jpg',
            'female_004.jpg',
            'female_005.jpg',
            'female_006.jpg',
            'female_007.jpg',
            'female_008.jpg',
            'female_009.jpg',
            'female_010.jpg',
        ];

        return gender ? manList[Utils.getInt(0, manList.length)] : womanList[Utils.getInt(0, womanList.length)];
    }

    // список школьных предметов
    static schoolSubjectList: string[] = [
        "алгебра",
        "биология",
        "рисование",
        "химия",
        "география",
        "геометрия",
        "история",
        "литература",
        "математика",
        "музыка",
        "физкультура",
        "труды",
        "физика"
    ];

    // получить школьный предмет
    static getSchoolSubject(): string {
        return Utils.schoolSubjectList[Utils.getInt(0, Utils.schoolSubjectList.length)];
    }

    // названия учебных группы
    static groupNameList: string[] = ["A1", "A2", "A3"];

    // получить название группы
    static getGroupName(): string {
        return Utils.groupNameList[Utils.getInt(0, Utils.groupNameList.length)];
    }

    // коллекция фильмов
    static filmList = [
        new Film('Зеленая миля', 'Фрэнк Дарабонт', 'драма', 1999),
        new Film('Список Шиндлера', 'Стивен Спилберг', 'драма', 1993),
        new Film('Побег из Шоушенка', 'Фрэнк Дарабонт', 'драма', 1994),
        new Film('Форрест Гамп', 'Роберт Земекис', 'драма', 1994),
        new Film('Криминальное чтиво', 'Квентин Тарантино', 'криминал', 1994),
        new Film('Поймай меня, если сможешь', 'Ствен Спилберг', 'криминал', 2002),
        new Film('Джентльмены', 'Гай Ричи', 'криминал', 2019),
        new Film('Линкольн для адвоката', 'Брэд Фурман', 'детектив', 2011),
        new Film('Достать ножи', 'Райан Джонсон', 'детектив', 2019),
        new Film('Шестое чувство', 'М. Найт Шьямалан', 'детектив', 1999),
    ];
}
