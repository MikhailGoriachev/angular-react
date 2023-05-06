import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ReactForm01Component,
  ReactForm02Component,
  ReactForm03Component,
  ReactForm04Component,
} from './01_reactive-forms';

const routes: Routes = [
  {path: '', component: ReactForm01Component},
  {path: 'styles-forms', component: ReactForm02Component},
  {path: 'simple-reactive-form', component: ReactForm03Component},
  {path: 'validators-reactive-form', component: ReactForm04Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
