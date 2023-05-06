import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// импорт компонент приложения
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

// декоратор NgModule делает класс модулем Angular
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],

  // список компонентов для размещения в index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
