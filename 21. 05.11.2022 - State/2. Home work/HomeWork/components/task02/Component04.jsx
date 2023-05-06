// Компонент 4 
// Определить номер координатной четверти, в которой находится точка с ненулевыми координатами (x, y). 
// Пропсы: начальные значения x, y. Стейт: x, y, номер координатной плоскости по клику на кнопку меняем стейт
class Component04 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.state = {...this.props, number: this.getNumber(this.props.x, this.props.y)};

        this.changeData = this.changeData.bind(this);
    }

    // получение номера координатной четверти
    getNumber(x, y) {
        console.log(x, y)
        switch (true) {
            // 1-я четверть
            case (x > 0 && y > 0):
                return 1;

            // 2-я четверть
            case (x < 0 && y > 0):
                return 2;

            // 3-я четверть
            case (x < 0 && y < 0):
                return 3;

            // 4-я четверть
            case (x > 0 && y < 0):
                return 4;
        }
    }


    // изменение данных
    changeData() {
        this.setState(() => {
            let x = getDouble(-20, 20);
            let y = getDouble(-20, 20);
            let res = this.getNumber(x,  y);
            return {
                x: x,
                y: y,
                number: res
            }
        });
    }

    // рендеринг
    render() {
        return (
            <div className="card col m-3 shadow">

                <div className={"card-header"}>
                    <h4 className={"text-center"}>Координатная четверть</h4>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">X: <b>{this.state.x.toFixed(3)}</b></li>
                    <li className="list-group-item">Y: <b>{this.state.y.toFixed(3)}</b></li>
                    <li className="list-group-item">Четверть: <b>{this.state.number}-я</b></li>
                </ul>

                <div className={"card-footer text-center mt-auto"}>
                    <button className={"btn btn-primary mx-3 col"} onClick={this.changeData}>
                        Генерация данных
                    </button>
                </div>
            </div>
        );
    }
}