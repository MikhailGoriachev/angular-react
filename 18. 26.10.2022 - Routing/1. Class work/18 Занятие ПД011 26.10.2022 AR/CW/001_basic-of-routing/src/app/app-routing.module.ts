import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  // Указание корневой страницы (главной страницы сайта/приложения)
  // Первый способ правится настройкой в шаблоне
  // у ссылки [routerLinkActiveOptions]="{exact: true}"
  // {path: '', component: MainPageComponent, pathMatch: 'full'},
  // Второй способ используя редирект (перенаправление к указанному маршруту)
  {path: '', redirectTo: 'main', pathMatch: 'full'},

  {path: 'main', component: MainPageComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contacts', component: ContactsPageComponent},
  // путь ** размещать самым последним!
  {path: '**', component: Page404Component},
];

@NgModule({
  // Метод forRoot один на все приложение!!!
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
