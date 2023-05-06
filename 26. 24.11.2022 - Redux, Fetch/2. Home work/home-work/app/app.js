import AppContainer from "./containers/AppContainer.js";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <>
        <AppContainer/>
        
        <footer className="bg-dark shadow fs-6 text-white-50 p-5 pb-2">
            <p>
                Разработчик: <a href="https://github.com/MikhailGoriachev" target="_bank"><b>Горячев Михаил</b></a>
            </p>
            <p>Группа: <b>ПД011</b></p>
            <p>Город: <b>Донецк</b></p>
            <p>Год создания: <b>2022</b></p>
            <p>
                Поддержка: <a href="mailto:goriachevmichael@gmail.com"><b>goriachevmichael@gmail.com</b></a>
            </p>
        </footer>
    </>,
    document.getElementById("app"));