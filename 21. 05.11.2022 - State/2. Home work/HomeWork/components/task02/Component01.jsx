// Компонент 1
// Определить количество корней квадратного уравнения. Пропсы: начальные значения 
// a, b, c. Стейт: a, b, c, кол-во корней. По клику на кнопку меняем стейт
class Component01 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.state = {...this.props, roots: this.getRoots(this.props.data.a, this.props.data.b, this.props.data.c)};

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

    // количество квадратных корней
    set roots(value) {
        this.setState(() => {
            return {roots: value}
        })
    }

    get roots() {
        return this.state.roots;
    }


    // вычиление количества корней
    getRoots(a, b, c) {
        if (equalsDouble(a, 0))
            return 0;

        let dis = (b ** 2) - 4 * a * c;

        return dis > 0 ? 2 : dis === 0 ? 1 : 0;
    }


    // изменение данных
    changeData() {
        this.data = {a: getDouble(-20, 20), b: getDouble(-20, 20), c: getDouble(-20, 20)};
        
        this.setState(state => {
            let roots = this.getRoots(state.data.a, state.data.b, state.data.c);
            return {
                roots: roots
            }
        })
    }

    // рендеринг
    render() {
        return (
            <div className="card w-22rem col m-3 shadow">

                <div className={"card-header"}>
                    <h4 className={"text-center"}>Квадратное уравнение</h4>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">a: <b>{this.data.a.toFixed(5)}</b></li>
                    <li className="list-group-item">b: <b>{this.data.b.toFixed(5)}</b></li>
                    <li className="list-group-item">c: <b>{this.data.c.toFixed(5)}</b></li>
                    <li className="list-group-item">Количество корней: <b>{this.roots}</b></li>
                </ul>

                <div className={"card-footer text-center"}>
                    <button className={"btn btn-primary mx-3 col"} onClick={this.changeData}>
                        Генерация данных
                    </button>
                </div>
            </div>
        );
    }
}