import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  HttpRequest01Component,
  HttpRequest02Component,
  HttpRequest03Component,
  HttpRequest04Component
} from './index';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    HttpRequest01Component,
    HttpRequest02Component,
    HttpRequest03Component,
    HttpRequest04Component,
  ],
  exports: [],
}) 
export class HTTPExamplesModule { } 
