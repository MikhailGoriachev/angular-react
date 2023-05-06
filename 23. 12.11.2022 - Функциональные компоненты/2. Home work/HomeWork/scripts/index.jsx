// одработка страницы "index.html"

// функция для рендеринга main
let renderMain = () => ReactDOM.createRoot(document.querySelector("#app")).render(
    <Main/>
);

// функция для рендеринга Задания 2
let renderTask01 = () => ReactDOM.createRoot(document.querySelector("#app")).render(
    <Task01/>
);

// вывод навигации
ReactDOM.createRoot(document.querySelector("#nav")).render(
    <Navigation tabName="main"
                mainRender={renderMain}
                task01Render={renderTask01}/>
);

// вывод главной страниы
renderMain();
