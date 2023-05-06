// одработка страницы "index.html"

// функция для рендеринга main
let renderMain = () => ReactDOM.createRoot(document.querySelector("#app")).render(
    <Main/>
);

// функция для рендеринга bookList
let renderBook = () => ReactDOM.createRoot(document.querySelector("#app")).render(
    <BookList/>
);

// функция для рендеринга goodsList
let renderGoods = () => ReactDOM.createRoot(document.querySelector("#app")).render(
    <GoodsList/>
);

// функция для рендеринга Задания 2
let renderTask02 = () => ReactDOM.createRoot(document.querySelector("#app")).render(
    <Task02/>
);

// вывод навигации
ReactDOM.createRoot(document.querySelector("#nav")).render(
    <Navigation tabName="main"
                mainRender={renderMain}
                bookRender={renderBook}
                goodsRender={renderGoods}
                task02Render={renderTask02}/>
);

// вывод главной страниы
renderMain();
