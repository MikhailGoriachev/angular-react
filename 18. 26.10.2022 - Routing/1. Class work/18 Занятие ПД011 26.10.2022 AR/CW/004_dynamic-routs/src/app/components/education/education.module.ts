import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { TheoryComponent } from './theory/theory.component';
import { PracticeComponent } from './practice/practice.component';
import { CardDetailsComponent } from './theory/card-details/card-details.component';

@NgModule({
  declarations: [
    TheoryComponent,
    PracticeComponent,
    CardDetailsComponent,
  ],
  imports: [
    CommonModule,
    // Регистрация модуля маршрутизации
    EducationRoutingModule
  ]
})
export class EducationModule { }
