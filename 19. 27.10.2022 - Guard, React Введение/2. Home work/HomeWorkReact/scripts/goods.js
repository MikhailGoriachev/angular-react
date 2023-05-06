// обработка страницы goods.html

// объект товара
let goods = {
    // наименование
    name: "Apple MacBook Air 13\"",

    // артикул
    vendorCode: "245161909",
    
    // цена
    price: 109_000,

    // количество
    amount: 1,
    
    // изображение товара
    image: "macbook.jpg",
}

ReactDOM.createRoot(document.querySelector("#app"))
    .render(
        <div className="card w-22rem">

            <div className="card-header">
                <img srcSet={`../images/goods/${goods.image}`} className="d-block mx-auto w-100" alt="goods"/>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">Название: <b>{goods.name}</b></li>
                <li className="list-group-item">Артикул: <b>{goods.vendorCode}</b></li>
                <li className="list-group-item">Цена: <b>{goods.price}</b></li>
                <li className="list-group-item">Количество: <b>{goods.amount}</b></li>
            </ul>
        </div>
    );