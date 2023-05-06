// компонент форма для ввода данных о приёме
function AppointmentForm() {

    // ключ данных в локальном хранилище
    const dataKey = 'appointmentsData';

    // список данных 
    let res = localStorage.getItem(dataKey);

    // если данные отсутствуют 
    if (!res) {
        localStorage.setItem(dataKey, JSON.stringify([]));
    }

    res = JSON.parse(res);

    // данные
    const [data, setData] = React.useState(res);

    // ссылки на поля формы
    const doctorField = React.createRef(null);
    const patientField = React.createRef(null);
    const specialityField = React.createRef(null);
    const consultingRoomField = React.createRef(null);
    const costField = React.createRef(null);
    const interestPercentField = React.createRef(null);
    const incomeTaxField = React.createRef(null);
    const dateField = React.createRef(null);

    // список врачей
    let doctorList = Array(4).fill(0).map(_ => <option>{getRandomItem(getInitialsList())}</option>);
    let specList = getSpecialities().map(c => <option>{c}</option>);

    // обработка изменения массива
    React.useEffect(() => {
        localStorage.setItem(dataKey, JSON.stringify(data));
    }, [data]);

    // обработка события добавления
    const onSubmit = (e) => {
        e.preventDefault();

        let id = Math.max(...data.map(d => d.id)) + 1;
        setData([...data, new Appointment(
            id,
            doctorField.current.value,
            patientField.current.value,
            +consultingRoomField.current.value,
            specialityField.current.value,
            +costField.current.value,
            +interestPercentField.current.value,
            +incomeTaxField.current.value,
            +dateField.current.value
        )])
    }

    return (
        <form onSubmit={onSubmit} className="w-50 mx-auto">
            <h4 className="text-center">Добавление приёма</h4>

            <div className={`form-floating my-2`}>

                <div className={`form-floating my-2`}>
                    <select ref={doctorField}
                            className="form-select"
                            placeholder="Доктор" required>
                        {doctorList}
                    </select>
                    <label className="form-label">Доктор</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="text" ref={patientField}
                           className="form-control"
                           placeholder="Пациент" value={getRandomItem(getInitialsList())} required/>
                    <label className="form-label">Пациент</label>
                </div>

                <div className={`form-floating my-2`}>
                    <select ref={specialityField}
                            className="form-select"
                            placeholder="Специальность" required>
                        {specList}
                    </select>
                    <label className="form-label">Специальность</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="number" ref={consultingRoomField}
                           className="form-control"
                           min={1}
                           placeholder="Кабинет" required/>
                    <label className="form-label">Кабинет</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="number" ref={costField}
                           className="form-control"
                           min={1}
                           placeholder="Стоимость приёма" required/>
                    <label className="form-label">Стоимость приёма</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="number" ref={interestPercentField}
                           className="form-control"
                           min={1} max={100}
                           placeholder="Процент отчисления врачу" required/>
                    <label className="form-label">Процент отчисления врачу</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="number" ref={incomeTaxField}
                           className="form-control"
                           min={0}
                           placeholder="Подоходный налог" required/>
                    <label className="form-label">Подоходный налог</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="date" ref={dateField}
                           className="form-control"
                           placeholder="Дата приёма" required/>
                    <label className="form-label">Дата приёма</label>
                </div>

                <div>
                    <input type="submit" className="btn btn-success w-10rem me-3" value="Добавить"/>
                    <Link className="btn btn-primary" to={`/appointments`}>Вернуться к списку</Link>
                </div>
            </div>
        </form>
    )
}