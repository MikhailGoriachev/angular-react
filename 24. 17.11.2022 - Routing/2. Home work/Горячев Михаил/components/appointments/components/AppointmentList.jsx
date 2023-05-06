// компонент для вывода списка приёмов
function AppointmentList(props) {

    // ключ данных в локальном хранилище
    const dataKey = 'appointmentsData';

    // список данных 
    let res = localStorage.getItem(dataKey);

    // если данные отсутствуют 
    if (!res) {
        let i = 1;
        res = JSON.stringify(Array(12).fill(0).map(_ => getAppointment(i++)));
        localStorage.setItem(dataKey, res);
    }

    res = JSON.parse(res);

    // данные
    const data = React.useRef(res);

    let rows = () => data.current.map((c) => (
        <tr key={c.id}>
            <th>{c.id}</th>
            <td>{c.doctor}</td>
            <td>{c.speciality}</td>
            <td>{c.patient}</td>
            <td>{c.cost}</td>
            <td><Link className={'btn btn-primary'} to={`/appointments/details/${c.id}`}>Детально</Link></td>
        </tr>
    ));

    // общая стоимость
    const [cost, setCost] = React.useState(0);

    React.useEffect(() => setCost(data.current.reduce((p, c) => p + c.cost, 0)), []);

    return (
        <>
            <h4 className="text-center">
                Список приёмов <small className='text-black-50'>(Общая стоимость {cost}&#8381;)</small>
            </h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Врач</th>
                    <th>Специальность</th>
                    <th>Пациент</th>
                    <th>Стоимость приёма (&#8381;)</th>
                    <td><Link className={'btn btn-success'} to={`/appointments/form`}>Добавить</Link></td>
                </tr>
                </thead>
                <tbody>{rows()}</tbody>
            </table>
        </>
    );
}