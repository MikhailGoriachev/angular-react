import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { Page404Component } from './components/page404/page404.component';

import { SpecialityRouteModule } from './components/speciality/speciality-route/speciality-route.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './components/speciality/shared/backend.service';
import { HttpClientModule } from '@angular/common/http';

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
    // Регистрация не требуется пунта "Обучение у нас" путей theory & practice
    // У данного модуля (EducationModule) настроена ленивая загрузка
    // EducationModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(BackendService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
