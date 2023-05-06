// Компонент 1 
// Отображение данных о банковском переводе: фамилия и инициалы отправителя, номер телефона отправителя, фамилия и
// инициалы получателя, номер телефона получателя, дата и время перевода (момент создания компонента), банковские 
// отчисления за операцию перевода (1,2% от суммы перевода). Вводить сумму перевода (от 1 до 50000 руб.), вычислять 
// отчисления банку. Остальные параметры задавать атрибутами компонента.
class Component01 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.minTransferAmount = 1;
        this.maxTransferAmount = 50_000;

        this.transferAmountField = React.createRef();

        this.props.bankTransfer.dateTimeTransfer = new Date();

        this.state = {
            bankTransfer: this.props.bankTransfer,
            bankInterest: 0,
            validTransferAmount: null
        };

        this.onChange = this.onChange.bind(this);
    }

    // изменение данных
    onChange() {
        let value = +this.transferAmountField.current.value;

        if (value >= this.minTransferAmount && value <= this.maxTransferAmount) {

            let transfer = this.state.bankTransfer;

            this.setState({
                bankTransfer: {
                    ...transfer, transferAmount: value
                },
                bankInterest: (value / 100) * transfer.bankInterestPercent,
                validTransferAmount: true
            });
        } else 
            this.setState({validTransferAmount: false});
    }

    // рендеринг
    render() {
        let {bankTransfer, validTransferAmount} = this.state;
        let validTransferAmountClass = validTransferAmount === null
            ? ''
            : validTransferAmount
                ? 'is-valid'
                : 'is-invalid';

        return <div className="card w-22rem col m-2 shadow">

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
                <li className="list-group-item">Сумма перевода: <b>{bankTransfer.transferAmount.toFixed(2)}&#8381;</b>
                </li>
                <li className="list-group-item">Процент отчислений банку: <b>{bankTransfer.bankInterestPercent}%</b>
                </li>
                <li className="list-group-item">Комиссия: <b>{this.state.bankInterest.toFixed(2)}&#8381;</b></li>
            </ul>

            <div className={"card-footer text-center mt-auto"}>
                <div className={`alert ${validTransferAmount ? 'alert-success' : 'alert-danger'}`} role="alert">
                    Значение суммы перевода должно быть в диапазоне
                    от {this.minTransferAmount} до {this.maxTransferAmount} рублей
                </div>

                <form>
                    <div className={`form-floating my-2`}>
                        <input type="number" ref={this.transferAmountField}
                               onChange={this.onChange}
                               className={`form-control ${validTransferAmountClass}`}
                               placeholder="Сумма перевода (&#8381;)" required/>
                        <label className="form-label">Сумма перевода (&#8381;):</label>
                    </div>
                </form>
            </div>

        </div>;
    }
}