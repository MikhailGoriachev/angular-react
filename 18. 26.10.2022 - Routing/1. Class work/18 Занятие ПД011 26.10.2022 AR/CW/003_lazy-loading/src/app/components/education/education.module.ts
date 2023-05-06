import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { TheoryComponent } from './theory/theory.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    TheoryComponent,
    PracticeComponent,
  ],
  imports: [
    CommonModule,
    // Регистрация модуля маршрутизации
    EducationRoutingModule
  ]
})
export class EducationModule { }
