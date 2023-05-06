import { OrderCostService } from './shared/order-cost.service';
import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
const varProducts = [
  {
    title: 'ручки',
    priceForOne: 100,
    quantity: 4
  },
  {
    title: 'пенал',
    priceForOne: 111,
    quantity: 1
  },
  {
    title: 'тетради',
    priceForOne: 222,
    quantity: 2
  },
]
@Component({
  selector: 'app-service05-busket-example',
  templateUrl: './service05-busket-example.component.html',
  styleUrls: ['./service05-busket-example.component.css']
})
export class Service05BusketExampleComponent implements OnInit, AfterViewChecked {

  constructor(
    private orderCostService: OrderCostService,
    private cdRef: ChangeDetectorRef
    ) { }

  totalCost = 0;
  products = varProducts;

  ngOnInit(): void {
    this.orderCostService.listPoducts = this.products;
  }

  ngAfterViewChecked(){
    this.totalCost = this.orderCostService.countUp();

    // Что бы не было ошибки которая рассматривалась в прошлом занятии
    this.cdRef.detectChanges();
  }

}
