// сравнение двух вещественных чисел
function equalsDouble(a, b) {
    return Math.abs(a - b) < 1e-10;
}

// получить целое случайное число
function getInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// получить вещественное случайное число
function getDouble(min, max) {
    return Math.random() * (max - min) + min;
}

// получить случайный элемент массива
function getRandomItem(arr = []) {
    return arr[getInt(0, arr.length)];
}

// список специальностей врачей
function getSpecialities() {
    return [
        'невропатолог',
        'офтальмолог',
        'онколог',
        'логопед',
        'кардиолог',
        'аллерголог',
        'ортопед'
    ];
}

// получить список фамилий и инициалов
function getInitialsList() {
    return [
        "Шуляк Д. А.",
        "Кологреев Г. Г.",
        "Есаулов С. Г.",
        "Ряполов Н. О.",
        "Михальченко М. В.",
        "Сахаров В. Я.",
        "Якимович Д. А.",
        "Малинов С. Е.",
        "Бок Т. Г.",
        "Старицкий Е. Л.",
        "Задков О. Р.",
        "Яминский П. А.",
        "Поджио И. В.",
        "Улицкий А. В.",
        "Синдеев Ф. В.",
    ]
}

// сгенерировать запись приёма у врача
function getAppointment(id) {
    let names = getInitialsList();

    return new Appointment(
        id,
        getRandomItem(names),
        getRandomItem(names),
        getInt(1, 20),
        getRandomItem(getSpecialities()),
        getInt(3, 15) * 100, getInt(20, 30),
        13,
        new Date(2022, getInt(1, 8), getInt(1, 28))
    );
}