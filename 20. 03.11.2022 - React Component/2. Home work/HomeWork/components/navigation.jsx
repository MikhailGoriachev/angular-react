// навигационный компонент
class Navigation extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        // привязка метода
        this.selectTabClass = this.selectTabClass.bind(this);
    }

    // получение класса выбранной вкладки по имени
    selectTabClass(tabName = "main") {
        return this.props.tabName === tabName ? "active" : "";
    }

    // обработка события выбора вкладки
    onSelectTab(e, tabName = "main") {
        e.preventDefault();

        let {mainRender, bookRender, goodsRender} = this.props;

        // рендеринг разметки выбранной вкладки
        switch (tabName) {
            case "main":
                mainRender();
                break;
            case "book":
                bookRender();
                break;
            case "goods":
                goodsRender();
                break;
        }

        // обновление навигации
        ReactDOM.createRoot(document.querySelector("#nav")).render(
            <Navigation tabName={tabName} mainRender={mainRender} bookRender={bookRender} goodsRender={goodsRender}/>
        );
    }

    // рендеринг разметки
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top shadow">
                <div className="container-fluid justify-content-center">

                    <a className="navbar-brand mx-2" href="#"
                       onClick={(e) => this.onSelectTab(e, "main")}>
                        <img className="logo" src="images/icon.svg" alt="logo"/>
                    </a>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className={`nav-link mx-3 ${this.selectTabClass("main")}`} href="#"
                                   onClick={(e) => this.onSelectTab(e, "main")}>
                                    Главная
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={`nav-link mx-3 ${this.selectTabClass("book")}`} href="#"
                                   onClick={(e) => this.onSelectTab(e, "book")}>
                                    Книга
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={`nav-link mx-3 ${this.selectTabClass("goods")}`} href="#"
                                   onClick={(e) => this.onSelectTab(e, "goods")}>
                                    Товар
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}