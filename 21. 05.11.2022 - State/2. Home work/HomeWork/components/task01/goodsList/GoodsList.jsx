// компонент "Список товаров"
class GoodsList extends React.Component {

    // конструктор
    constructor(props) {
        super(props);

        this.state = this.props;
    }

    // рендер
    render() {
        return (
            <section className="mx-5 my-4 bg-light shadow-sm border rounded-3 min-vh-100 p-3">
                <h4 className="text-center">Товары</h4>
                <div className="row">
                    <Goods goods={{
                        name: "Apple MacBook Pro 16\" M1 Pro",
                        vendorCode: "322710583",
                        price: 215_000,
                        count: 3,
                        image: "macbook16.jpg"
                    }}/>
                    <Goods goods={{
                        name: "Apple iMac 24\" М1 4.5К",
                        vendorCode: "285659278",
                        price: 120_000,
                        count: 2,
                        image: "imac.jpg"
                    }}/>
                    <Goods/>
                </div>
            </section>
        );
    }
}