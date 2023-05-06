// компонент "Задание 1"
function Task01() {
    return (
        <section className="mx-5 my-4 bg-light shadow-sm border rounded-3 min-vh-100 p-3">
            <h4 className="text-center">Задание 1</h4>
            <div className="row">
                <Component01 bankTransfer={new BankTransfer(
                    'Гришин В. А.',
                    '+38(050)-55-00-432',
                    'Вершкова А. Д.',
                    '+38(050)-55-34-541',
                    12.5,
                    0)}
                />
                <Component02/>
                <Component03 appointment={new Appointment(
                    '1',
                    'Безруков И. В.',
                    'Ушаков В. Ф.',
                    7,
                    'Терапевт',
                    0,
                    30,
                    13)}
                />
            </div>
        </section>
    );
}