import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialityRouteRoutingModule } from './speciality-route-routing.module';
import { BackendComponent } from '../backend/backend.component';
import { FrontEndComponent } from '../front-end/front-end.component';
import { HtmlComponent } from '../front-end/technology/html/html.component';
import { CssComponent } from '../front-end/technology/css/css.component';
import { JavaScriptComponent } from '../front-end/technology/java-script/java-script.component';


@NgModule({
  declarations: [
    BackendComponent,
    FrontEndComponent,
    HtmlComponent,
    CssComponent,
    JavaScriptComponent
  ],
  imports: [
    CommonModule,
    SpecialityRouteRoutingModule
  ]
})
export class SpecialityRouteModule { }
