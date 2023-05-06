import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescrArticleService {

  constructor() { }

  getData(id){
    console.log(id);
  }
}
