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

    // полуить целое случайное число
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

    // данные о товарах
    static goodsInfoList: { name: string, price: number, amount: number, image: string }[] = [
        {name: "Apple iPhone 14 Pro Max", price: 178_990, amount: Utils.getInt(1, 5), image: "iphone.jpeg"},
        {name: "Apple MacBook Pro 13", price: 249_990, amount: Utils.getInt(1, 5), image: "mac-book.jpg"},
        {name: "Apple iMac 21,5\" MHK33 (2020)", price: 117_990, amount: Utils.getInt(1, 5), image: "imac.jpg"},
        {name: "Apple Mac Studio (2022) M1 Ultra", price: 420_000, amount: Utils.getInt(1, 5), image: "mac-mini.jpg"},
        {name: "Apple iPad Air (2022) 10,9\"", price: 79_990, amount: Utils.getInt(1, 5), image: "ipad.png"},
    ]

    // получить данные о товаре
    static getGoodsData(): { name: string, price: number, amount: number, image: string } {
        let func = (item: { name: string, price: number, amount: number, image: string }) => {
            item.amount = this.getInt(1, 5);
            return item;
        };

        return func(this.goodsInfoList[this.getInt(0, this.goodsInfoList.length)]);
    }

    // установить активную вкладку в навигации
    static setNavTabActive(tabName: string): void {
        // удаление класса active с элементов навигации
        Array.from(document.querySelectorAll("[data-tab-name]")).forEach(n => n.classList.remove("active"));

        // установка класса active для выбранной вкладки
        document.querySelector(`[data-tab-name=${tabName}]`)?.classList.add("active");
    }
}

// получение элемента по id
export function $(id: string): HTMLElement | null {
    return document.getElementById(id);
}

// текст
export let text: string = "Разнообразный и богатый опыт постоянный количественный рост и сфера нашей " +
    "активности требуют от нас анализа дальнейших направлений развития. Повседневная практика показывает, " +
    "что укрепление и развитие структуры позволяет выполнять важные задания по разработке существенных " +
    "финансовых и административных условий. Разнообразный и богатый опыт реализация намеченных плановых " +
    "заданий способствует подготовки и реализации дальнейших направлений развития. С другой стороны укрепление " +
    "и развитие структуры позволяет оценить значение форм развития. Разнообразный и богатый опыт постоянное " +
    "информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа существенных финансовых " +
    "и административных условий. Таким образом рамки и место обучения кадров представляет собой интересный " +
    "эксперимент проверки форм развития.";
