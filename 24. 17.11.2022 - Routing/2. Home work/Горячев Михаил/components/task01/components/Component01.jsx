// Компонент 1 
// Отображение данных о банковском переводе: фамилия и инициалы отправителя, номер телефона отправителя, фамилия и
// инициалы получателя, номер телефона получателя, дата и время перевода (момент создания компонента), банковские 
// отчисления за операцию перевода (1,2% от суммы перевода). Вводить сумму перевода (от 1 до 50000 руб.), вычислять 
// отчисления банку. Остальные параметры задавать атрибутами компонента.
function Component01(props) {

    // диапазон значений
    const minTransferAmount = 1;
    const maxTransferAmount = 50_000;

    // поле ввода
    const transferAmountField = React.useRef(null);

    // установка даты
    props.bankTransfer.dateTimeTransfer = new Date();

    // стейты
    const [bankTransfer, setBankTransfer] = React.useState(props.bankTransfer);
    const [bankInterest, setBankInterest] = React.useState(0);
    const [validTransferAmount, setValidTransferAmount] = React.useState(null);

    // изменение данных
    const onChange = () => {

        let value = +transferAmountField.current.value;

        if (value >= minTransferAmount && value <= maxTransferAmount) {

            let transfer = bankTransfer;

            setBankTransfer({...bankTransfer, transferAmount: value});
            setBankInterest((value / 100) * transfer.bankInterestPercent);
            setValidTransferAmount(true);
        } else
            setValidTransferAmount(false);
    }

    // класс валидации
    let validTransferAmountClass = validTransferAmount === null
        ? ''
        : validTransferAmount
            ? 'is-valid'
            : 'is-invalid';

    return (
        <div className="card w-22rem col m-2 shadow">

            <div className="card-header">
                <h5 className="text-center">Банковский перевод</h5>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">Отправитель: <b>{bankTransfer.sender}</b></li>
                <li className="list-group-item">Телефон отправителя: <b>{bankTransfer.phoneSender}</b></li>
                <li className="list-group-item">Получатель: <b>{bankTransfer.receirver}</b></li>
                <li className="list-group-item">Телефон получателя: <b>{bankTransfer.phoneReceirver}</b></li>
                <li className="list-group-item">Дата и время: <b>{bankTransfer.dateTimeTransfer.toLocaleString()}</b>
                </li>
                <li className="list-group-item">Сумма
                    перевода: <b>{(+bankTransfer.transferAmount).toFixed(2)}&#8381;</b>
                </li>
                <li className="list-group-item">Процент отчислений банку: <b>{bankTransfer.bankInterestPercent}%</b>
                </li>
                <li className="list-group-item">Комиссия: <b>{bankInterest.toFixed(2)}&#8381;</b></li>
            </ul>

            <div className={"card-footer text-center mt-auto"}>
                <div className={`alert ${validTransferAmount ? 'alert-success' : 'alert-danger'}`} role="alert">
                    Значение суммы перевода должно быть в диапазоне
                    от {minTransferAmount} до {maxTransferAmount} рублей
                </div>

                <form>
                    <div className={`form-floating my-2`}>
                        <input type="number" ref={transferAmountField}
                               onChange={onChange}
                               className={`form-control ${validTransferAmountClass}`}
                               placeholder="Сумма перевода (&#8381;)" required/>
                        <label className="form-label">Сумма перевода (&#8381;):</label>
                    </div>
                </form>
            </div>
        </div>
    );
}