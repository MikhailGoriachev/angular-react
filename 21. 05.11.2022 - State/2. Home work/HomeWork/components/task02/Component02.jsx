// Компонент 2 
// Найти периметр равнобедренного треугольника по его основанию a и высоте h, проведенной к основанию. 
// Пропсы: начальные значения a, h. Стейт: a, h, p. По клику на кнопку меняем стейт
class Component02 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.state = {...this.props, p: this.getPerimeter(this.props.data.a, this.props.data.h)};

        this.changeData = this.changeData.bind(this);
    }

    // данные
    set data(value) {
        this.setState(() => {
            return {
                data: value
            }
        })
    }

    get data() {
        return this.state.data;
    }


    // вычисление периметра тругольника
    getPerimeter(a, h) {
        return a + 2 * Math.sqrt((a / 2) ** 2 + h ** 2);
    }


    // изменение данных
    changeData() {
        this.data = {a: getDouble(10, 15), h: getDouble(10, 20)};
        this.setState(state => {
            let p = this.getPerimeter(state.data.a, state.data.h);
            console.log(state)
            return {
                p: p
            }
        });
    }

    // рендеринг
    render() {
        return (
            <div className="card col m-3 shadow">

                <div className={"card-header"}>
                    <h4 className={"text-center"}>Навнобедренный треугольник</h4>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Основание: <b>{this.data.a.toFixed(5)}</b></li>
                    <li className="list-group-item">Высота: <b>{this.data.h.toFixed(5)}</b></li>
                    <li className="list-group-item">Периметр: <b>{this.state.p.toFixed(5)}</b></li>
                </ul>

                <div className={"card-footer text-center mt-auto"}>
                    <button className={"btn btn-primary mx-3 col"} onClick={this.changeData}>
                        Генерация данных
                    </button>
                </div>
            </div>
        );
    }
}