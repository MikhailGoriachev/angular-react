// Компонент 2 
// Требуется вычислять нормальную массу тела человека по его росту (по формуле Лоренца): 
// Масса (кг) = (Рост (см) - 100) - (Рост (см) - 150)/2. Вводите исходные данные в форму, выполняйте валидацию данных.
function Component02(props) {

    // диапазон значений
    const minHeight = 50;
    const maxHeight = 250;

    const heightField = React.useRef(null);

    // вычисление периметра тругольника
    const getMass = (height) => {
        return (height - 100) - (height - 150) / 2;
    }

    let initHeight = 50;

    const [height, setHeight] = React.useState(initHeight);
    const [weight, setWeight] = React.useState(getMass(initHeight));
    const [validHeight, setValidHeight] = React.useState(null);

    // изменение данных
    const onChange = () => {
        let heightValue = +heightField.current.value;

        const min = 50, max = 250;

        if (heightValue >= min && heightValue <= max) {
            setHeight(heightValue);
            setWeight(getMass(height));
            setValidHeight(true);
        } else
            setValidHeight(false);
    }

    // класс валидации
    let validHeightClass = validHeight === null
        ? ''
        : validHeight
            ? 'is-valid'
            : 'is-invalid';

    // рендеринг
    return (
        <div className="card col m-2 shadow">

            <div className="card-header">
                <h5 className="text-center">Нормальная масса (формула Лоренца)</h5>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">Рост: <b>{height.toFixed(2)} см</b></li>
                <li className="list-group-item">Вес: <b>{weight.toFixed(2)} кг</b></li>
            </ul>

            <div className={"card-footer text-center mt-auto"}>
                <div className={`alert ${validHeight ? 'alert-success' : 'alert-danger'}`} role="alert">
                    Значение роста должно быть в диапазоне от {minHeight} до {maxHeight} сантиметров
                </div>

                <form>
                    <div className={`form-floating my-2`}>
                        <input type="number" ref={heightField}
                               onChange={onChange}
                               className={`form-control ${validHeightClass}`}
                               placeholder="Рост (см)" required/>
                        <label className="form-label">Рост (см):</label>
                    </div>
                </form>
            </div>
        </div>
    );
}