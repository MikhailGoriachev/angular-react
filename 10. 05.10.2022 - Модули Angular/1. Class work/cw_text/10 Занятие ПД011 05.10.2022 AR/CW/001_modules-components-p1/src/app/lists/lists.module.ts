import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// упрощение синтаксиса импорта - за счет использования index.ts
import { UlComponent, OlComponent, DlComponent} from './index';

@NgModule({
  declarations: [
    UlComponent,
    OlComponent,
    DlComponent],
  imports: [
    // указываем, т.к. это вспомогательный модуль
    CommonModule
  ]
})
export class ListsModule { }
