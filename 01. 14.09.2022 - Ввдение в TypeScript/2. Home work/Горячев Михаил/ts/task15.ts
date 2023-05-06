// обработка страницы task15.html

// количество объектов для вычислений
let countTask15 = 5;

// инициализация страницы
function initTask15(): void {
    // создание матиматических объектов
    let items = [];

    for (let i = 0; i < countTask15; i++)
        items[i] = new MathModel(getInt(10, 21), getInt(10, 21));

    let n = 1;

    // вывод данных в таблицу
    document.getElementById("tbodyId").innerHTML =
        items.reduce((prev, cur) => prev +
            `<tr>
                <td>${n++}</td>
                <td>${cur.a.toFixed(5)}</td>
                <td>${cur.b.toFixed(5)}</td>                
                <td>${cur.z1v15().toFixed(5)}</td>
                <td>${cur.z2v15().toFixed(5)}</td>
            </tr>`,
            "")
}

// установка обработчика событий для загрузки страницы
window.addEventListener("load", initTask15);
