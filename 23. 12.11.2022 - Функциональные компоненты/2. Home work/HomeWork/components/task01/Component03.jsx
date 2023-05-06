// Компонент 3
// За каждый прием врачу отчисляется фиксированный процент от стоимости приема. Фамилия и инициалы врача, 
// его специальность и процент отчисления задаются атрибутами при создании компонента. Размер начисляемой врачу 
// заработной платы за каждый прием вычисляется по формуле: Стоимость приема * Процент отчисления от стоимости приема 
// на зарплату врача. Из этой суммы вычитается подоходный налог, составляющий 13% от суммы. Вводите стоимость приема 
// (с валидацией), выводите сумму к выдаче заработной платы врача за прием.
class Component03 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.minCost = 1;
        this.maxCost = 1_000_000;

        this.costField = React.createRef();

        this.state = {appointment: this.props.appointment, interest: 0, validCost: null};

        this.onChange = this.onChange.bind(this);
    }

    // изменение данных
    onChange() {
        let cost = +this.costField.current.value;

        if (cost >= this.minCost && cost <= this.maxCost) {

            let appointment = this.state.appointment;

            this.setState({
                appointment: {
                    ...appointment, cost
                },
                interest: cost * appointment.interestPercent / (100 - appointment.incomeTax),
                validCost: true
            });
        } else this.setState({validCost: false});
    }

    // рендеринг
    render() {
        let {appointment, validCost, interest} = this.state;
        let validCostClass = validCost === null
            ? ''
            : validCost
                ? 'is-valid'
                : 'is-invalid';

        return (<div className="card w-22rem col m-2 shadow">

            <div className="card-header">
                <h5 className="text-center">Медицинский приём</h5>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">Доктор: <b>{appointment.doctor}</b></li>
                <li className="list-group-item">Специальность: <b>{appointment.speciality}</b></li>
                <li className="list-group-item">Стоимость приёма: <b>{appointment.cost.toFixed(2)}&#8381;</b></li>
                <li className="list-group-item">Процент отчисления врачу: <b>{appointment.interestPercent}%</b></li>
                <li className="list-group-item">Подоходный налог: <b>{appointment.incomeTax}%</b></li>
                <li className="list-group-item">Начисление врачу: <b>{interest.toFixed(2)}&#8381;</b></li>
            </ul>

            <div className={"card-footer text-center mt-auto"}>
                <div className={`alert ${validCost ? 'alert-success' : 'alert-danger'}`} role="alert">
                    Значение стоимости приёма должно быть в диапазоне
                    от {this.minCost} до {this.maxCost} рублей
                </div>

                <form>
                    <div className={`form-floating my-2`}>
                        <input type="number" ref={this.costField}
                               onChange={this.onChange}
                               className={`form-control ${validCostClass}`}
                               placeholder="Стоимость приёма (&#8381;)" required/>
                        <label className="form-label">Стоимость приёма (&#8381;):</label>
                    </div>
                </form>
            </div>

        </div>);
    }
}