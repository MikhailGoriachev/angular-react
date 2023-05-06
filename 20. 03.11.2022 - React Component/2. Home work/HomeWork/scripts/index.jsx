// одработка страницы "index.html"

// функция для рендеринга main
let renderMain = () => ReactDOM.createRoot(document.querySelector("#app")).render(
    <Main/>
);

// функция для рендеринга book
let renderBook = () => ReactDOM.createRoot(document.querySelector("#app")).render(
    <Book/>
);

// функция для рендеринга goods
let renderGoods = () => ReactDOM.createRoot(document.querySelector("#app")).render(
    <Goods/>
);

// вывод навигации
ReactDOM.createRoot(document.querySelector("#nav")).render(
    <Navigation tabName="main" mainRender={renderMain} bookRender={renderBook} goodsRender={renderGoods}/>
);

// вывод главной страниы
renderMain();
