import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: 'about', loadChildren: () => import("./components/about-us/about-us.module").then(mod => mod.AboutUsModule)},
  {path: '', loadChildren: () => import("./components/education/education.module").then(mod => mod.EducationModule)},
  {path: 'contacts', component: ContactsPageComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  // Метод forRoot один на все приложение!!!
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
