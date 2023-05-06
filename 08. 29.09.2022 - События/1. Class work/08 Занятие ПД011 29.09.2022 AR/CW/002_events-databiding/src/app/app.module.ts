import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Binding01InterpolationComponent } from './01_binding/binding01interpolation/binding01interpolation.component';
import { Binding02PropertyComponent } from './01_binding/binding02property/binding02property.component';
import { Binding03EventsComponent } from './01_binding/binding03events/binding03events.component';
import { Binding04ReferenseComponent } from './01_binding/binding04referense/binding04referense.component';
import { Binding05KeyboardsComponent } from './01_binding/binding05keyboards/binding05keyboards.component';
import { Binding06AttributeComponent } from './01_binding/binding06attribute/binding06attribute.component';
import { Binding07ClassComponent } from './01_binding/binding07class/binding07class.component';
import { Binding08StyleComponent } from './01_binding/binding08style/binding08style.component';

@NgModule({
  declarations: [
    AppComponent,
    Binding01InterpolationComponent,
    Binding02PropertyComponent,
    Binding03EventsComponent,
    Binding04ReferenseComponent,
    Binding05KeyboardsComponent,
    Binding06AttributeComponent,
    Binding07ClassComponent,
    Binding08StyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  /* подключение модуля маршрутизации  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
