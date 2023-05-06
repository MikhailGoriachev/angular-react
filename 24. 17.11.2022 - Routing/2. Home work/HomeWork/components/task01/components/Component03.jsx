// Компонент 3
// За каждый прием врачу отчисляется фиксированный процент от стоимости приема. Фамилия и инициалы врача, 
// его специальность и процент отчисления задаются атрибутами при создании компонента. Размер начисляемой врачу 
// заработной платы за каждый прием вычисляется по формуле: Стоимость приема * Процент отчисления от стоимости приема 
// на зарплату врача. Из этой суммы вычитается подоходный налог, составляющий 13% от суммы. Вводите стоимость приема 
// (с валидацией), выводите сумму к выдаче заработной платы врача за прием.
function Component03(props) {

    // диапазон значений
    const minCost = 1;
    const maxCost = 1_000_000;

    // поле ввода
    const costField = React.useRef(null);

    // состояния
    const [appointment, setAppointment] = React.useState(props.appointment);
    const [interest, setInterest] = React.useState(0);
    const [validCost, setValidCost] = React.useState(null);

    // изменение данных
    const onChange = () => {
        let cost = +costField.current.value;

        if (cost >= minCost && cost <= maxCost) {
            setAppointment({...appointment, cost})
            setInterest(cost * appointment.interestPercent / (100 - appointment.incomeTax))
            setValidCost(true);
        } else
            setValidCost(false);
    }
    let validCostClass = validCost === null
        ? ''
        : validCost
            ? 'is-valid'
            : 'is-invalid';

    return (
        <div className="card w-22rem col m-2 shadow">

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
                    от {minCost} до {maxCost} рублей
                </div>

                <form>
                    <div className={`form-floating my-2`}>
                        <input type="number" ref={costField}
                               onChange={onChange}
                               className={`form-control ${validCostClass}`}
                               placeholder="Стоимость приёма (&#8381;)" required/>
                        <label className="form-label">Стоимость приёма (&#8381;):</label>
                    </div>
                </form>
            </div>
        </div>
    );
}