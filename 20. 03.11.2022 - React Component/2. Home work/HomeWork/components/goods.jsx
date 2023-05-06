// количество товара
var countGoods = 2;

// компонент "Товар"
class Goods extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        // привязка методов
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    // увеличение количества
    increaseCount() {
        countGoods++;

        this.updateRender();
    }

    // уменьшение количества
    decreaseCount() {
        if (countGoods <= 0)
            return;

        countGoods--;
        this.updateRender();
    }

    // обновление разметки
    updateRender() {
        ReactDOM.createRoot(document.querySelector("#app")).render(
            <Goods book={this.props}/>
        );
    }

    // рендеринг компонента
    render() {
        let goods = this.props.goods;

        return (
            <section className="mx-5 my-4 bg-light shadow-sm border rounded-3 min-vh-100 p-3">
                <h4 className={"text-center"}>Товар</h4>
                
                <div className="card w-22rem">

                    <div className="card-header">
                        <img srcSet={`../images/goods/${goods.image}`} className="d-block mx-auto w-100" alt="goods"/>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Название: <b>{goods.name}</b></li>
                        <li className="list-group-item">Артикул: <b>{goods.vendorCode}</b></li>
                        <li className="list-group-item">Количество: <b>{countGoods}</b></li>
                        <li className="list-group-item">Цена: <b>{goods.price}</b></li>
                        <li className="list-group-item">Стоимость: <b>{goods.price * countGoods}</b></li>
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

// объект товара
let goods = {
    // наименование
    name: "Apple MacBook Air 13\"",

    // артикул
    vendorCode: "245161909",

    // цена
    price: 109_000,

    // изображение товара
    image: "macbook.jpg",
}

// установка значений по умолчанию
Goods.defaultProps = {goods: goods};