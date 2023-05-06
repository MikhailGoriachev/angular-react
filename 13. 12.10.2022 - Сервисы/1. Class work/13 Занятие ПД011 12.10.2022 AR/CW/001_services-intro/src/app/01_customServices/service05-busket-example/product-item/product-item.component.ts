import { Component, OnInit, Input } from '@angular/core';
import { OrderCostService } from '../shared/order-cost.service';

// локальный сервис
import { QuantityUnitsService } from '../shared/quantity-units.service';

// Совместное использование локального и глобального сервисов
// QuantityUnitsService - локальный сервис
// OrderCostService - глобальный сервис
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],

  // локальный сервис
  providers: [QuantityUnitsService]
})
export class ProductItemComponent implements OnInit {


  @Input() card: {title: string, quantity: number, priceForOne: number} = null!;

  constructor(
    private quantityUnitsService: QuantityUnitsService,
    private orderCostService: OrderCostService
  ) {}

  ngOnInit(): void {
    console.log(this.card)
  }

  // при увеличении количества товара - персчитать общую стоимость
  plusOne(){
    this.card.quantity = this.quantityUnitsService.plus()
    this.orderCostService.countUp()
  }

  // при уменьшении количества товара - персчитать общую стоимость
  minusOne(){
    this.card.quantity = this.quantityUnitsService.minus()
    this.orderCostService.countUp()
  }


}
