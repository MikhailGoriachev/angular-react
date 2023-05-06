import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent, WorkersProcessComponent} from "./index";

const routes: Routes = [
  // маршруты приложения
  {path: '', component: HomeComponent},
  {path: 'workers_process', component: WorkersProcessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
