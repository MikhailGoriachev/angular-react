import { Injectable } from '@angular/core';

@Injectable({
  // глобальный сервис
  providedIn: 'root'
})
export class OrderCostService {

  listPoducts: any[] = null!;

  constructor() { }


  countUp(){
    return this.listPoducts
      .reduce((acc, element) => acc + element.priceForOne * element.quantity, 0);
  }
}
