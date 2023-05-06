// Компонент 1
// Определить количество корней квадратного уравнения. Пропсы: начальные значения 
// a, b, c. Стейт: a, b, c, кол-во корней. По клику на кнопку меняем стейт
class Component01 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.aField = React.createRef();
        this.bField = React.createRef();
        this.cField = React.createRef();

        this.state = {roots: "—"};

        this.onSubmit = this.onSubmit.bind(this);
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
        if (equalsDouble(a, 0)) return 0;

        let dis = (b ** 2) - 4 * a * c;

        return dis > 0 ? 2 : dis === 0 ? 1 : 0;
    }


    // изменение данных
    onSubmit(e) {
        e.preventDefault();

        this.setState(state => {
            let roots = this.getRoots(+this.aField.current.value, +this.bField.current.value, +this.cField.current.value);
            return {roots}
        })
    }

    // рендеринг
    render() {
        let a = +this.aField.current?.value;
        let b = +this.bField.current?.value;
        let c = +this.cField.current?.value;

        return (<div className="card w-22rem col m-2 shadow">

            <div className="card-header">
                <h5 className="text-center">Квадратное уравнение</h5>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">a: <b>{isNaN(a) ? "—" : a.toFixed(5)}</b></li>
                <li className="list-group-item">b: <b>{isNaN(b) ? "—" : b.toFixed(5)}</b></li>
                <li className="list-group-item">c: <b>{isNaN(c) ? "—" : c.toFixed(5)}</b></li>
                <li className="list-group-item">Количество корней: <b>{this.roots}</b></li>
            </ul>

            <div className={"card-footer text-center mt-auto"}>
                <form onSubmit={this.onSubmit}>

                    <div className="form-floating my-2">
                        <input type="number" ref={this.aField} className="form-control" placeholder="a"
                               step="any" required/>
                        <label className="form-label">Число a:</label>
                    </div>

                    <div className="form-floating my-2">
                        <input type="number" ref={this.bField} className="form-control" placeholder="b"
                               step="any" required/>
                        <label className="form-label">Число b:</label>
                    </div>

                    <div className="form-floating my-2">
                        <input type="number" ref={this.cField} className="form-control" placeholder="c"
                               step="any" required/>
                        <label className="form-label">Число c:</label>
                    </div>

                    <input type="submit" className={"btn btn-primary mx-3 w-10rem col"} value="Вычислить"/>
                </form>
            </div>

        </div>);
    }
}