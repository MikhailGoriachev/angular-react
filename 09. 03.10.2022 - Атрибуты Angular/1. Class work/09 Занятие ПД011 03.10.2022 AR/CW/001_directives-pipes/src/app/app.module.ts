import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Pipe01Component } from './02_pipes/pipe01/pipe01.component';
import { Pipe02Component } from './02_pipes/pipe02/pipe02.component';
import { Pipe03Component } from './02_pipes/pipe03/pipe03.component';
import { Directive01NgClassComponent } from './01_directives/directive01ng-class/directive01ng-class.component';
import { Directive02ngStyleComponent } from './01_directives/directive02ng-style/directive02ng-style.component';
import { Directive03ngIfComponent } from './01_directives/directive03ng-if/directive03ng-if.component';
import { Directive04ngSwitchComponent } from './01_directives/directive04ng-switch/directive04ng-switch.component';
import { Directive05ngForComponent } from './01_directives/directive05ng-for/directive05ng-for.component';
import { Directive06ngTemplateComponent } from './01_directives/directive06ng-template/directive06ng-template.component';
import { Directive07ngContainerComponent } from './01_directives/directive07ng-container/directive07ng-container.component';
import { Directive08ngTemplateOutletComponent } from './01_directives/directive08ng-template-outlet/directive08ng-template-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    Directive01NgClassComponent,
    Directive02ngStyleComponent,
    Directive03ngIfComponent,
    Directive04ngSwitchComponent,
    Directive05ngForComponent,
    Directive06ngTemplateComponent,
    Directive07ngContainerComponent,
    Pipe01Component,
    Pipe02Component,
    Pipe03Component,
    Directive08ngTemplateOutletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
