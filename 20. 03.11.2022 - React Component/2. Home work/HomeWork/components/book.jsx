// количество книг
var countBook = 3;

// компонент "Книга"
class Book extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        // привязка методов
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    // увеличение количества
    increaseCount() {
        countBook++;

        this.updateRender();
    }

    // уменьшение количества
    decreaseCount() {
        if (countBook <= 0)
            return;
        
        countBook--;
        this.updateRender();
    }

    // обновление разметки
    updateRender() {
        let {image, title, author, year, price} = this.props;

        ReactDOM.createRoot(document.querySelector("#app")).render(
            <Book title={title} author={author} year={year} price={price} image={image}/>
        );
    }

    // рендеринг компонента
    render() {
        let {image, title, author, year, price} = this.props;

        return (
            <section className="mx-5 my-4 bg-light shadow-sm border rounded-3 min-vh-100 p-3">
                <h4 className={"text-center"}>Книга</h4>
                
                <div className="card w-20rem">

                    <div className="card-header">
                        <img srcSet={`../images/books/${image}`} className="d-block mx-auto h-20rem" alt="book"/>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Название: <b>{title}</b></li>
                        <li className="list-group-item">Автор: <b>{author}</b></li>
                        <li className="list-group-item">Год издания: <b>{year}</b></li>
                        <li className="list-group-item">Количество: <b>{countBook}</b></li>
                        <li className="list-group-item">Цена: <b>{price}</b></li>
                        <li className="list-group-item">Стоимость: <b>{price * countBook}</b></li>
                    </ul>

                    <div className={"card-footer text-center"}>
                        <p className={"text-center fw-bold"}>Управление количеством</p>
                        <div className={"row"}>
                            <button className={"btn btn-danger mx-3 col"} onClick={this.decreaseCount}>
                                <i className="bi bi-dash-lg"></i>
                            </button>
                            <button className={"btn btn-primary mx-3 col"} onClick={this.increaseCount}>
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

// установка значения по умолчанию
Book.defaultProps = {
    // название
    title: "Над пропастью во ржи",

    // автор
    author: "Джером Сэлинджер",

    // год издания
    year: 2021,

    // цена
    price: 450,

    // изображение обложки
    image: "book.webp",
};