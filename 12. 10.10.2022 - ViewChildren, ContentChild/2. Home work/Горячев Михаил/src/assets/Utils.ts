// Класс Утилиты
import {Ship} from "../models/Ships/Ship";

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

    // типы кораблей
    static shipTypes: string[] = [
        "судно-контейнеровоз",
        "сухогруз",
        "танкер",
        "ледокол",
        "портовый буксиры",
        "плавучий кран",
        "рыболовецкий траулер",
        "научно-исследовательское судно",
        "плавучий сухой док",
        "судно-газовоз"
    ];

    // коллекция данных о кораблях
    static shipList: Ship[] = [
        new Ship(Utils.shipTypes[4], "PRELUDE", 488, 74, 394330, 2017, "PRELUDE.jpg"),
        new Ship(Utils.shipTypes[5], "PIONEERING SPIRIT", 477, 124, 499125, 2014, "PIONEERING_SPIRIT.jpg"),
        new Ship(Utils.shipTypes[4], "CORAL-SUL FLNG", 277, 46, 346165, 2021, "CORAL-SUL_FLNG.jpg"),
        new Ship(Utils.shipTypes[2], "FSO AFRICA", 378, 68, 236638, 2002, "FSO_AFRICA.jpg"),
        new Ship(Utils.shipTypes[2], "FSO ASIA", 380, 68, 236638, 2002, "FSO_ASIA.jpg"),
        new Ship(Utils.shipTypes[0], "CMA CGM SORBONNE", 400, 61, 236583, 2021, "CMA_CGM_SORBONNE.jpg"),
        new Ship(Utils.shipTypes[0], "EVER ARM", 400, 62, 200000, 2022, "EVER_ARM.jpg"),
        new Ship(Utils.shipTypes[0], "MSC MIA", 400, 62, 228149, 2019, "MSC_MIA.jpg"),
        new Ship(Utils.shipTypes[0], "MSC AMELIA", 400, 61, 228406, 2021, "MSC_AMELIA.jpg"),
        new Ship(Utils.shipTypes[2], "TA'KUNTAH", 392, 60, 170706, 1977, "TA'KUNTAH.jpg"),
    ];

    // получить случайный корабль
    static getShip(): Ship {
        return Object.assign(new Ship(), Utils.shipList[Utils.getInt(0, Utils.shipList.length)]);
    }

}
