import { Injectable } from '@angular/core';

// декоратор @Injectable() делает класс сервисом
@Injectable()
export class DataForListService {

  getData(){
    let data = [];
    for(let i = 0; i < 8; i++){
      data.push(`Элемент данных номер ${i+1}`);
    }
    return data;
  }
}
