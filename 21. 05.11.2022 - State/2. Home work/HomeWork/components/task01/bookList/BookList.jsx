// компонент "Список книг"
class BookList extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.state = this.props;
    }

    // рендер
    render() {
        return (
            <section className="mx-5 my-4 bg-light shadow-sm border rounded-3 min-vh-100 p-3">
                <h4 className={"text-center"}>Книги</h4>

                <div className={"row"}>
                    <Book title={"1984"} author={"Джорджа Оруэлла"} year={1949} price={840} count={7} image={"1984.jpg"}></Book>
                    <Book title={"О дивный новый мир"} author={"Олдос Хаксли"} year={1932} price={930} count={4} image={"world.webp"}></Book>
                    <Book></Book>
                </div>
            </section>

        );
    }
}