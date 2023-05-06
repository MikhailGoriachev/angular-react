import {Component, OnInit} from '@angular/core';
import {$, Utils} from "../../assets/Utils";

// товар
class Goods {
    constructor(public name: string = "",
                public price: number = 0,
                public amount: number = 0,
                public image: string = "") {
    }
}

@Component({
    selector: 'app-task03',
    templateUrl: './task03.component.html',
    styleUrls: ['./task03.component.css']
})
export class Task03Component implements OnInit {

    // товар
    public goods: Goods = new Goods();


    // конструктор
    constructor() {

    }

    // обработчик события инициализации модуля
    ngOnInit(): void {
        // установка активности в панели навигации
        Utils.setNavTabActive("task03");

        // создание товара
        this.goods = Utils.getGoodsData();

        this.showGoods();

        $("generateId")?.addEventListener("click", () => {
            this.goods = Utils.getGoodsData();
            this.showGoods();
        })
    }

    // вывод данных в разметку
    showGoods() {
        $("imgId")!.setAttribute("src", `assets/images/goods/${this.goods.image}`)
        $("nameId")!.innerHTML = this.goods.name;
        $("priceId")!.innerHTML = this.goods.price.toFixed(2);
        $("amountId")!.innerHTML = this.goods.amount.toString();
    }

}
