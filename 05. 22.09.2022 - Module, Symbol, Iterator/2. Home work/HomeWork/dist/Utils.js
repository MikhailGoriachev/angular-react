// Класс Утилиты
export class Utils {
    // полуить целое случайное число
    static getInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    // получить вещественное случайное число
    static getDouble(min, max) {
        return Math.random() * (max - min) + min;
    }
    // получить фио
    static getFullName(gender = "none") {
        let male = () => {
            return {
                surname: this.surnameMaleList[Utils.getInt(0, this.surnameMaleList.length)],
                name: this.nameMaleList[Utils.getInt(0, this.nameMaleList.length)],
                patronymic: this.patronymicMaleList[Utils.getInt(0, this.patronymicMaleList.length)]
            };
        };
        let female = () => {
            return {
                surname: this.surnameFemaleList[Utils.getInt(0, this.surnameFemaleList.length)],
                name: this.nameFemaleList[Utils.getInt(0, this.nameFemaleList.length)],
                patronymic: this.patronymicFemaleList[Utils.getInt(0, this.patronymicFemaleList.length)]
            };
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
    // генерация автомобильного номера
    static getPlate() {
        let vow = "ABCPOMTEXC";
        let getVow = () => vow[Utils.getInt(0, vow.length)] + vow[Utils.getInt(0, vow.length)];
        return `${getVow()} ${Utils.getInt(1000, 10000)} ${getVow()}`;
    }
    // генерация номера маршрута
    static getRouteNumber() {
        let vow = "\0абвг";
        return `${Utils.getInt(1, 140)}${vow[Utils.getInt(0, vow.length)]}`;
    }
    // сравнение двух номеров маршрута
    static compareToRoute(a, b) {
        let reg = /^\d+/;
        return +reg.exec(a)[0] - +reg.exec(b)[0];
    }
}
// мужские фамилии
Utils.surnameMaleList = [
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
];
// мужские имена
Utils.nameMaleList = [
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
];
// мужские отчества
Utils.patronymicMaleList = [
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
];
// женские фамилии
Utils.surnameFemaleList = [
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
];
// женские имена
Utils.nameFemaleList = [
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
];
// женские отчества
Utils.patronymicFemaleList = [
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
];
//# sourceMappingURL=Utils.js.map