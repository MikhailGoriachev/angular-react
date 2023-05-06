// Компонент 2 
// Найти периметр равнобедренного треугольника по его основанию a и высоте h, проведенной к основанию. 
// Пропсы: начальные значения a, h. Стейт: a, h, p. По клику на кнопку меняем стейт
class Component02 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.aField = React.createRef();
        this.hField = React.createRef();

        this.state = {p: "—", a: "—", h: "—", aValidClass: "", hValidClass: "",};

        this.onSubmit = this.onSubmit.bind(this);
    }


    // вычисление периметра тругольника
    getPerimeter(a, h) {
        return a + 2 * Math.sqrt((a / 2) ** 2 + h ** 2);
    }

    // изменение данных
    onSubmit(e) {
        e.preventDefault();

        if (this.state.aValidClass === "is-valid" && this.state.hValidClass === "is-valid") {
            this.setState(_ => {
                let a = +this.aField.current.value;
                let h = +this.hField.current.value;
                let p = this.getPerimeter(a, h);
                return {a, h, p};
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
        let h = +this.state.h;
        let p = +this.state.p;
        
        return (
            <div className="card col m-2 shadow">

                <div className={"card-header"}>
                    <h5 className="text-center">Треугольник</h5>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Основание: <b>{isNaN(a) ? "—" : a.toFixed(5)}</b></li>
                    <li className="list-group-item">Высота: <b>{isNaN(h) ? "—" : h.toFixed(5)}</b></li>
                    <li className="list-group-item">Периметр: <b>{isNaN(p) ? "—" : p.toFixed(5)}</b></li>
                </ul>

                <div className={"card-footer text-center mt-auto"}>
                    <form onSubmit={this.onSubmit}>

                        <div className={`form-floating my-2 ${this.state.aValidClass}`}>
                            <input type="number" ref={this.aField} className={`form-control ${this.state.aValidClass}`}
                                   placeholder="a"
                                   step="any"
                                   onChange={() => this.setState({aValidClass: this.getClassIsValid(this.aField.current.value)})}
                                   required/>
                            <label className="form-label">Основание:</label>
                        </div>

                        <div className="form-floating my-2">
                            <input type="number" ref={this.hField} className={`form-control ${this.state.hValidClass}`}
                                   placeholder="h"
                                   onChange={() => this.setState({hValidClass: this.getClassIsValid(this.hField.current.value)})}
                                   step="any" required/>
                            <label className="form-label">Высота:</label>
                        </div>

                        <input type="submit" className={"btn btn-primary mx-3 w-10rem col"} value="Вычислить"/>
                    </form>
                </div>
            </div>
        );
    }
}