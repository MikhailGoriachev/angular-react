// компонент "Задание 1"
class Task01 extends React.Component {
    render() {
        return (
            <section className="mx-5 my-4 bg-light shadow-sm border rounded-3 min-vh-100 p-3">
                <h4 className="text-center">Задание 1</h4>
                <div className="row">
                    <Component01/>
                    <Component02/>
                    <Component03/>
                    <Component04/>
                </div>
            </section>
        );
    }
}