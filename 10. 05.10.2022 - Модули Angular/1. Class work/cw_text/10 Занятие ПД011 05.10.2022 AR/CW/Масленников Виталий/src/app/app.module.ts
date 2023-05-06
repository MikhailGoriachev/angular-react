import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import {arrowDownShort, arrowUpShort, checkSquare, xSquare} from "ngx-bootstrap-icons";
import { FormsModule } from "@angular/forms";
import { WorkersComponent } from './workers/workers.component';

const icons = {
    arrowDownShort,
    arrowUpShort,
    checkSquare,
    xSquare
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
        WorkersComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxBootstrapIconsModule.pick(icons),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
