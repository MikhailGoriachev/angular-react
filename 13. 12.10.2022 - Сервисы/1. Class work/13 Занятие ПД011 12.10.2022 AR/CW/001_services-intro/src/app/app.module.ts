import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleService } from './01_customServices/service01-simple/simple.service';
import { CustomServicesModule } from './01_customServices/custom-services.module';
import { ScopeCounterService } from './01_customServices/service03-scope/scope-counter.service';
import { ForProvidedInPropertyModule } from './01_customServices/service04-provided-in/for-provided-in-property/for-provided-in-property.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomServicesModule,
    AppRoutingModule,

    // к этому модулю привязан сервис из примера 4: регистрация модуля === регистрация сервиса
    // поэтому можно пользоваться сервисом без регистрации в providers
    // ForProvidedInPropertyModule
  ],
  // регистрация сервисов
  // SimpleService - первый сервис в примерах
  // ScopeCounterService Настройка общего сервиса для компонентов. У каждого компонента будет один счетчик на всех
  providers: [
    SimpleService, ScopeCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
