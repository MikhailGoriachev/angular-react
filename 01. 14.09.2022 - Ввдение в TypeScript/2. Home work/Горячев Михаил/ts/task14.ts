// обработка страницы task14.html

// количество объектов для вычислений
let countTask14 = 5;

// инициализация страницы
function initTask14(): void {
    // создание матиматических объектов
    let items = [];

    for (let i = 0; i < countTask14; i++)
        items[i] = new MathModel(getInt(10, 21), getInt(10, 21));

    let n = 1;

    // вывод данных в таблицу
    document.getElementById("tbodyId").innerHTML =
        items.reduce((prev, cur) => prev +
            `<tr>
                <td>${n++}</td>
                <td>${cur.a.toFixed(5)}</td>
                <td>${cur.b.toFixed(5)}</td>                
                <td>${cur.z1v14().toFixed(5)}</td>
                <td>${cur.z2v14().toFixed(5)}</td>
            </tr>`,
            "")

    console.log(document.getElementById("tbodyId").innerHTML);

}

// установка обработчика событий для загрузки страницы
window.addEventListener("load", initTask14);
