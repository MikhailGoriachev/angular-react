// компонент "Товар"
class Goods extends React.Component {

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
        this.setState(state => {
            return {goods: {...state.goods, count: state.goods.count + 1}};
        });
    }

    // уменьшение количества
    decreaseCount() {
        if (this.state.goods.count <= 0)
            return;

        this.setState(state => {
            return {goods: {...state.goods, count: state.goods.count - 1}};
        });
    }

    // рендеринг компонента
    render() {
        let goods = this.state.goods;

        return (
            <div className="card w-22rem col m-3 shadow">

                <div className="card-header h-100 row justify-content-around">
                    <img srcSet={`../images/goods/${goods.image}`} className="d-block my-auto mx-auto w-100" alt="goods"/>
                </div>

                <div className={"mt-auto"}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Название: <b>{goods.name}</b></li>
                        <li className="list-group-item">Артикул: <b>{goods.vendorCode}</b></li>
                        <li className="list-group-item">Количество: <b>{goods.count}</b></li>
                        <li className="list-group-item">Цена: <b>{goods.price}</b></li>
                        <li className="list-group-item">Стоимость: <b>{goods.price * goods.count}</b></li>
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
            </div>
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

    // количество
    count: 3,

    // изображение товара
    image: "macbook.jpg",
}

// установка значений по умолчанию
Goods.defaultProps = {goods: goods};