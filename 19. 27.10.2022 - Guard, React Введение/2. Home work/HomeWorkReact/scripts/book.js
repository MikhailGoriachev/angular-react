// обработка страницы book.html

// объект книги
let book = {
    // название
    title: "Над пропостью во ржи",

    // автор
    author: "Джером Сэлинджер",

    // год издания
    year: 2021,

    // цена
    price: 450,

    // изображение обложки
    image: "book.webp",
}

ReactDOM.createRoot(document.querySelector("#app"))
    .render(
        <div className="card w-20rem">

            <div className="card-header">
                <img srcSet={`../images/books/${book.image}`} className="d-block mx-auto h-20rem" alt="book"/>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">Название: <b>{book.title}</b></li>
                <li className="list-group-item">Автор: <b>{book.author}</b></li>
                <li className="list-group-item">Год издания: <b>{book.year}</b></li>
                <li className="list-group-item">Цена: <b>{book.price}</b></li>
            </ul>
        </div>
    );