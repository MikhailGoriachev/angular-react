// Компонент 3
// Определить является ли простым числом число a. Пропсы: начальное значение a. Стейт: a, результат проверки. 
// По клику на кнопку меняем стейт
class Component03 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.state = {...this.props, isSimple: this.isSimple(this.props.a)};

        this.changeData = this.changeData.bind(this);
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
        if (a < 2) {
            return false;
        } else if (a === 2) {
            return true;
        }

        let i = 2;
        const limit = Math.sqrt(a);
        while (i <= limit) {
            if (a % i === 0) {
                return false;
            }
            i +=1;
        }

        return true;
    }


    // изменение данных
    changeData() {
        this.a = getInt(10, 20);
        this.setState(state => {
            let res = this.isSimple(state.a);
            return {
                isSimple: res
            }
        });
    }

    // рендеринг
    render() {
        return (
            <div className="card col m-3 shadow">

                <div className={"card-header"}>
                    <h4 className={"text-center"}>Простое число</h4>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Число: <b>{this.a}</b></li>
                    <li className="list-group-item">Простое число: <b>{this.state.isSimple ? "да" : "нет"}</b></li>
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