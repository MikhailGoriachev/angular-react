// Компонент 2 
// Требуется вычислять нормальную массу тела человека по его росту (по формуле Лоренца): 
// Масса (кг) = (Рост (см) - 100) - (Рост (см) - 150)/2. Вводите исходные данные в форму, выполняйте валидацию данных.
class Component02 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.minHeight = 50;
        this.maxHeight = 250;

        this.heightField = React.createRef();

        let height = 50;
        this.state = {height, weight: this.getMass(height), validHeight: null};

        this.onChange = this.onChange.bind(this);
    }


    // вычисление периметра тругольника
    getMass(height) {
        return (height - 100) - (height - 150) / 2;
    }

    // изменение данных
    onChange() {
        let heightValue = +this.heightField.current.value;

        const min = 50, max = 250;

        if (heightValue >= min && heightValue <= max) {
            this.setState({height: heightValue, weight: this.getMass(heightValue), validHeight: true});
        } else
            this.setState({validHeight: false});
    }

    // рендеринг
    render() {
        let {height, weight, validHeight} = this.state;
        let validHeightClass = validHeight === null
            ? ''
            : validHeight
                ? 'is-valid'
                : 'is-invalid';

        return (<div className="card col m-2 shadow">

            <div className="card-header">
                <h5 className="text-center">Нормальная масса (формула Лоренца)</h5>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">Рост: <b>{height.toFixed(2)} см</b></li>
                <li className="list-group-item">Вес: <b>{weight.toFixed(2)} кг</b></li>
            </ul>

            <div className={"card-footer text-center mt-auto"}>
                <div className={`alert ${validHeight ? 'alert-success' : 'alert-danger'}`} role="alert">
                    Значение роста должно быть в диапазоне от {this.minHeight} до {this.maxHeight} сантиметров
                </div>

                <form>
                    <div className={`form-floating my-2`}>
                        <input type="number" ref={this.heightField}
                               onChange={this.onChange}
                               className={`form-control ${validHeightClass}`}
                               placeholder="Рост (см)" required/>
                        <label className="form-label">Рост (см):</label>
                    </div>
                </form>
            </div>
        </div>);
    }
}