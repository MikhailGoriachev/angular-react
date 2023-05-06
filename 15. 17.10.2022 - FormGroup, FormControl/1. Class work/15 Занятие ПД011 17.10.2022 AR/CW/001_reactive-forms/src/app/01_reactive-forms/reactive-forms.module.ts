import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//------------- FORMS ----------------
import { FormsModule } from "@angular/forms";// импорт для того что бы работал [(ngModel)]
import { ReactiveFormsModule } from "@angular/forms";// импорт для того что бы работали Реактивные формы
//------------- FORMS END ----------------

import {
    ReactForm01Component,
    ReactForm02Component,
    ReactForm03Component,
    ReactForm04Component,
} from './index';

@NgModule({
  imports: [
    CommonModule,
    // без этой регистрации ngModel будет не доступен
    FormsModule,
    // без этой регистрации реактивные модули для форм работать не будут
    ReactiveFormsModule
  ],
  declarations: [
  ReactForm01Component,
  ReactForm02Component,
  ReactForm03Component,
  ReactForm04Component],
  exports: [],
})
export class ReactiveFormsExampleModule { }

