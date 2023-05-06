import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxJs01Component , RxJs02Component } from './01_RxJS/index';
import { HttpRequest01Component,
         HttpRequest02Component,
         HttpRequest03Component,
         HttpRequest04Component
      } from './02_HTTPClient/index';


const routes: Routes = [
  {path: '', component: RxJs01Component},
  {path: 'reactive-extensions', component: RxJs02Component},
  {path: 'http-client', component: HttpRequest01Component},
  {path: 'todo-list', component: HttpRequest02Component},
  {path: 'http-params', component: HttpRequest03Component},
  {path: 'http-headers', component: HttpRequest04Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
