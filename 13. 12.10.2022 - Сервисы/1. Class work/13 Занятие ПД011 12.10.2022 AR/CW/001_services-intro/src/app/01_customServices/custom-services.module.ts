import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  Service01SimpleComponent,
  Service02LocalComponent,
  Service03ScopeComponent,
  Child01Component,
  Child02Component,
  Child03Component,
  Service04ProvidedInComponent,
  ChildCounterComponent,
  Service05BusketExampleComponent,
  ProductItemComponent
} from './index';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Service01SimpleComponent,
    Service02LocalComponent,
    Service03ScopeComponent,
    Child01Component,
    Child02Component,
    Child03Component,
    Service04ProvidedInComponent,
    ChildCounterComponent,
    Service05BusketExampleComponent,
    ProductItemComponent,
  ],
  exports: [],
}) 
export class CustomServicesModule { } 
