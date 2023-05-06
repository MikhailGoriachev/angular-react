import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent, NotFoundComponent, C1Component} from "./index";

const routes: Routes = [
  // маршруты приложения
  {path: '', component: HomeComponent},
  {path: 'calc', component: C1Component},
  // компонент для несуществующих путей
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
