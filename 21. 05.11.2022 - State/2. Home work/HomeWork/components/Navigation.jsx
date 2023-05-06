// навигационный компонент
class Navigation extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.state = this.props;

        // привязка метода
        this.selectTabClass = this.selectTabClass.bind(this);
    }

    // получение класса выбранной вкладки по имени
    selectTabClass(tabName = "main") {
        return this.state.tabName === tabName ? "active" : "";
    }

    // обработка события выбора вкладки
    onSelectTab(e, tabName = "main") {
        e.preventDefault();

        let {mainRender, bookRender, goodsRender, task02Render} = this.props;

        // рендеринг разметки выбранной вкладки
        switch (tabName) {
            case "main":
                mainRender();
                break;
            case "bookList":
                bookRender();
                break;
            case "goodsList":
                goodsRender();
                break;
            case "task02":
                task02Render();
                break;
        }

        this.setState(() => {
            return {
                tabName: tabName
            }
        })
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
                                <a className={`nav-link mx-3 ${this.selectTabClass("bookList")}`} href="#"
                                   onClick={(e) => this.onSelectTab(e, "bookList")}>
                                    Книга
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={`nav-link mx-3 ${this.selectTabClass("goodsList")}`} href="#"
                                   onClick={(e) => this.onSelectTab(e, "goodsList")}>
                                    Товар
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={`nav-link mx-3 ${this.selectTabClass("task02")}`} href="#"
                                   onClick={(e) => this.onSelectTab(e, "task02")}>
                                    Квдратное уравнение
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}