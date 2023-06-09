import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentStylesModule } from './01_component-styles/component-styles.module';
import { ComponentInteractionModule } from './02_parameter-passing/component-interaction.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentStylesModule,
    ComponentInteractionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
