import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxJsLibraryModule } from './01_RxJS/rx-js-library.module';

import { HTTPExamplesModule } from './02_HTTPClient/http-examples.module';
import { BackendServiceService } from './02_HTTPClient/http-request02/backend-service.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RxJsLibraryModule,
    HTTPExamplesModule,
    // Раскомментировать для корректной работы 4го примера
    // (для остальных примеров - закомментировать)
    // InMemoryWebApiModule.forRoot(BackendServiceService,
    //   // Настройка задержки ответа плагина InMemoryWebApiModule
    //   { delay: 700 }
    // )

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
