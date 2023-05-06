// Компонент 3
// Определить является ли простым числом число a. Пропсы: начальное значение a. Стейт: a, результат проверки. 
// По клику на кнопку меняем стейт
class Component03 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.aField = React.createRef();

        this.state = {p: "—", a: "—", aValidClass: ""};

        this.onSubmit = this.onSubmit.bind(this);
    }

    // данные
    set a(value) {
        this.setState(() => {
            return {
                a: value
            }
        })
    }

    get a() {
        return this.state.a;
    }

    // проверка числа на простоту
    isSimple(a) {
        let n = Math.sqrt(a);

        for (let i = 2; i < n; i++) {
            if (a % i === 0) return false;
        }
        return true;
    }


    // изменение данных
    onSubmit(e) {
        e.preventDefault();

        if (this.state.aValidClass === "is-valid") {
            this.setState(_ => {
                let a = +this.aField.current.value;
                let res = this.isSimple(a);
                return {
                    a,
                    isSimple: res
                }
            });
        }
    }

    // получение класса валидации
    getClassIsValid(value = 0) {
        return value > 0 ? "is-valid" : "is-invalid";
    }

    // рендеринг
    render() {
        let a = +this.state.a;
        let isSimple = this.state.isSimple === undefined ? "—" : this.state.isSimple ? "да" : "нет";

        return (
            <div className="card col m-2 shadow">

                <div className={"card-header"}>
                    <h5 className="text-center">Простое число</h5>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Число: <b>{isNaN(a) ? "—" : a}</b></li>
                    <li className="list-group-item">Простое число: <b>{isSimple}</b></li>
                </ul>

                <div className={"card-footer text-center mt-auto"}>
                    <form onSubmit={this.onSubmit}>

                        <div className={`form-floating my-2 ${this.state.aValidClass}`}>
                            <input type="number" ref={this.aField} className={`form-control ${this.state.aValidClass}`}
                                   placeholder="a"
                                   onChange={() => this.setState({aValidClass: this.getClassIsValid(this.aField.current.value)})}
                                   required/>
                            <label className="form-label">Число:</label>
                        </div>

                        <input type="submit" className={"btn btn-primary mx-3 w-10rem col"} value="Вычислить"/>
                    </form>
                </div>
            </div>
        );
    }
}