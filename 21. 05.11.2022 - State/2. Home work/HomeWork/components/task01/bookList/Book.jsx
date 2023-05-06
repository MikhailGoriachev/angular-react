// компонент "Книга"
class Book extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.state = this.props;

        // привязка методов
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    // увеличение количества
    increaseCount() {
        // устанвока значения
        this.setState(state => {
            return {count: state.count + 1};
        });
    }

    // уменьшение количества
    decreaseCount() {
        if (this.state.count <= 0)
            return;

        // устанвока значения
        this.setState(state => {
            return {count: state.count - 1};
        });
    }

    // рендеринг компонента
    render() {
        let {image, title, author, year, price, count} = this.state;

        return (
                <div className="card w-20rem col m-3 shadow">

                    <div className="card-header">
                        <img srcSet={`../images/books/${image}`} className="d-block mx-auto h-20rem" alt="book"/>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Название: <b>{title}</b></li>
                        <li className="list-group-item">Автор: <b>{author}</b></li>
                        <li className="list-group-item">Год издания: <b>{year}</b></li>
                        <li className="list-group-item">Количество: <b>{count}</b></li>
                        <li className="list-group-item">Цена: <b>{price}</b></li>
                        <li className="list-group-item">Стоимость: <b>{price * count}</b></li>
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
    year: 1951,

    // цена
    price: 760,

    // количество
    count: 1,

    // изображение обложки
    image: "book.webp",
};