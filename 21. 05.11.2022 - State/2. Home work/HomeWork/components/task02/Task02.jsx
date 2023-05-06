// компонент "Задание 2"
class Task02 extends React.Component {
    render() {
        return (
            <section className="mx-5 my-4 bg-light shadow-sm border rounded-3 min-vh-100 p-3">
                <h4 className="text-center">Задание 2</h4>
                <div className="row">
                    <Component01 data={{a: getDouble(-20, 20), b: getDouble(-20, 20), c: getDouble(-20, 20)}}/>
                    <Component02 data={{a: getDouble(5, 15), h: getDouble(5, 15)}}/>
                    <Component03 a={getInt(3, 20)}/>
                    <Component04 x={getDouble(-20, 20)} y={getDouble(-20, 20)}/>
                </div>
            </section>
        );
    }
}