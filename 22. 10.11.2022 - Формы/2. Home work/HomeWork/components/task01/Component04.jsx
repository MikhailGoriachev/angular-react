// Компонент 4 
// Определить номер координатной четверти, в которой находится точка с ненулевыми координатами (x, y). 
// Пропсы: начальные значения x, y. Стейт: x, y, номер координатной плоскости по клику на кнопку меняем стейт
class Component04 extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.state = {number: "—"};
        
        this.xField = React.createRef();
        this.yField = React.createRef();

        this.onSubmit = this.onSubmit.bind(this);
    }

    // получение номера координатной четверти
    getNumber(x, y) {
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
    onSubmit(e) {
        e.preventDefault();
        
        this.setState(() => {
            let res = this.getNumber(+this.xField.current.value, +this.yField.current.value);
            return {
                number: res
            }
        });
    }

    // рендеринг
    render() {
        let x = +this.xField.current?.value;
        let y = +this.yField.current?.value;
        let number = isNaN(+this.state.number) ? "—" : `${this.state.number}-я`;

        return (
            <div className="card col m-2 shadow">

                <div className={"card-header"}>
                    <h5 className="text-center">Координатная четверть</h5>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">X: <b>{isNaN(x) ? "—" : x.toFixed(5)}</b></li>
                    <li className="list-group-item">Y: <b>{isNaN(y) ? "—" : y.toFixed(5)}</b></li>
                    
                    <li className="list-group-item">Четверть: <b>{number}</b></li>
                </ul>

                <div className={"card-footer text-center mt-auto"}>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-floating my-2">
                            <input type="number" ref={this.xField} className="form-control" placeholder="x"
                                   step="any" required/>
                            <label className="form-label">Координата X:</label>
                        </div>

                        <div className="form-floating my-2">
                            <input type="number" ref={this.yField} className="form-control" placeholder="y"
                                   step="any" required/>
                            <label className="form-label">Координата Y:</label>
                        </div>

                        <input type="submit" className={"btn btn-primary mx-3 w-10rem col"} value="Вычислить"/>
                    </form>
                </div>
            </div>
        );
    }
}