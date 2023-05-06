import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { Page404Component } from './components/page404/page404.component';

import { SpecialityRouteModule } from './components/speciality/speciality-route/speciality-route.module';
import { EducationModule } from './components/education/education.module';
import { AboutUsModule } from './components/about-us/about-us.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactsPageComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    // Порядок импортов модулей влияет на работу проекта!!!
    // импорт пункта Специальности
    SpecialityRouteModule,
    // Регистрация пункта "Обучение у нас" для путей theory & practice не требуется
    // У данного модуля настроена ленивая загрузка
    // EducationModule,
    AppRoutingModule,
    // AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
