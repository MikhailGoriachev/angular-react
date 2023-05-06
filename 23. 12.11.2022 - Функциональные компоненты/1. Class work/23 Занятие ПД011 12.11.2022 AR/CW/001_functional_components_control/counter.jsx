// импорт хука useState
// таким же образом можно импортировать и другие хуки
// import React, { useState } from "react";

function ClickButtonHook(props) {
    // при помощи хука получить состояние компонента
    const [value, setValue] = React.useState(0);

    // обработчик события - клика по кнопке
    const press = function () {
        setValue(value + props.increment);
    };

    // возвращаем разметку компонента, не забываем про тег <> </>>
    return (
    <>
        <button onClick={press}>Счет</button>
        <div>Текущее значение счетчика: {value}<br/> Шаг инкремента: {props.increment}</div>
    </>);
} // ClickButtonHook
