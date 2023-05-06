import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  // {path: '', component: MainPageComponent},
  // {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contacts', component: ContactsPageComponent},

  // путь ** размещать самым последним!
  {path: '**', component: Page404Component}
];

@NgModule({
  // !!! метод forRoot может быть только один на все приложение !!!
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
