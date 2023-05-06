import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  RxJs01Component,
  IntervalComponent
} from './index';
import { RxJs02Component } from './rx-js02/rx-js02.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RxJs01Component, 
    IntervalComponent, RxJs02Component,
  ],
  exports: [],
}) 
export class RxJsLibraryModule { } 
